import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useTheme } from "../../contexts/ThemeContext";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";
import { Title } from "../../pages/PokemonDetails/styles";

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [allPokemonNames, setAllPokemonNames] = useState([]);
    const [offset, setOffset] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const { themeStyles } = useTheme();

    useEffect(() => {
        const fetchAllNames = async () => {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000");
            const data = await res.json();
            setAllPokemonNames(data.results);
        };
        fetchAllNames();
    }, []);


    useEffect(() => {
        const fetchPokemons = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
            const data = await res.json();

            const details = await Promise.all(
                data.results.map(async (p) => {
                    const r = await fetch(p.url);
                    return await r.json();
                })
            );

            setPokemons((prev) => {
                const existingIds = prev.map(p => p.id);
                const newOnes = details.filter(p => !existingIds.includes(p.id));
                return [...prev, ...newOnes];
            });
        };
        fetchPokemons();
    }, [offset]);


    useEffect(() => {
        if (!searchTerm) {
            setSearchResults([]);
            return;
        }

        const fetchSearchResults = async () => {
            setLoadingSearch(true);
            const filtered = allPokemonNames.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase())
            ).slice(0, 10);

            const details = await Promise.all(
                filtered.map(async (p) => {
                    const res = await fetch(p.url);
                    return await res.json();
                })
            );

            setSearchResults(details);
            setLoadingSearch(false);
        };

        fetchSearchResults();
    }, [searchTerm, allPokemonNames]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const displayedPokemons = useMemo(() => {
        if (searchTerm) return searchResults;
        return pokemons;
    }, [pokemons, searchTerm, searchResults]);

    return (
        <div style={{ background: themeStyles.background, color: themeStyles.text }}>
            <ThemeToggler />
            <Title>Pokédex</Title>

            <SearchBar
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Buscar Pokémon"
            />

            {loadingSearch && (
                <div style={{ textAlign: "center", padding: "20px" }}>Carregando...</div>
            )}

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 20,
                justifyContent: 'center',
                padding: 20
            }}>
                {displayedPokemons.length > 0 ? (
                    displayedPokemons.map((poke) => (
                        <Link
                            key={poke.id}
                            to={`/pokemon/${poke.name}`}
                            style={{ display: "inline-block", textDecoration: "none" }}
                        >
                            <PokemonCard pokemon={poke} />
                        </Link>
                    ))
                ) : searchTerm && !loadingSearch ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '40px',
                        color: themeStyles.text,
                        fontSize: '1.2rem'
                    }}>
                        🔍 Nenhum Pokémon encontrado "{searchTerm}"
                    </div>
                ) : null}
            </div>

            {!searchTerm && (
                <button className="btn-load-more" onClick={() => setOffset((prev) => prev + 10)}>
                    Show More
                </button>
            )}
        </div>
    );
}

export default Home;