import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";
import {
    Container,
    Title,
    PokemonCard,
    Header,
    PokemonImage,
    PokemonInfo,
    Section,
    TypeBadge,
    AbilityTag,
    MoveTag,
    BackButton,
    PokemonNumber,
    StatsSection,
    StatBar,
    LoadingMessage,
    ThemeToggleContainer
} from "./styles";

function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const { theme } = useTheme();

    useEffect(() => {
        async function fetchPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemon(data);
        }
        fetchPokemon();
    }, [name]);

    if (!pokemon) {
        return (
            <Container>
                <LoadingMessage>Carregando Pokémon...</LoadingMessage>
            </Container>
        );
    }

    const getTypeColor = (typeName) => {
        const typeColors = {
            fire: '#FF6B6B',
            water: '#4ECDC4',
            grass: '#45B7D1',
            electric: '#FFE66D',
            psychic: '#A8E6CF',
            ice: '#B8E6B8',
            dragon: '#FFB6C1',
            dark: '#8B7D6B',
            fairy: '#FFB3BA',
            normal: '#D3D3D3',
            fighting: '#CD853F',
            flying: '#87CEEB',
            poison: '#DDA0DD',
            ground: '#DEB887',
            rock: '#BC8F8F',
            bug: '#98FB98',
            ghost: '#D3D3D3',
            steel: '#C0C0C0'
        };
        return typeColors[typeName] || '#D3D3D3';
    };

    const getStatName = (statName) => {
        const statNames = {
            'hp': 'HP',
            'attack': 'ATK',
            'defense': 'DEF',
            'special-attack': 'SP.ATK',
            'special-defense': 'SP.DEF',
            'speed': 'SPD'
        };
        return statNames[statName] || statName.toUpperCase();
    };

    return (
        <Container theme={theme}>
            <ThemeToggleContainer>
                <ThemeToggler />
            </ThemeToggleContainer>
            <PokemonCard theme={theme}>
                <Header theme={theme}>
                    <BackButton to="/">← Voltar</BackButton>
                    <PokemonNumber>#{pokemon.id.toString().padStart(3, '0')}</PokemonNumber>
                </Header>

                <PokemonImage theme={theme}>
                    <img src={pokemon.sprites.other['official-artwork']?.front_default || pokemon.sprites.front_default} alt={pokemon.name} />
                </PokemonImage>

                <Title theme={theme}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Title>

                <PokemonInfo>
                    <Section theme={theme}>
                        <h3>Tipos</h3>
                        <div>
                            {pokemon.types.map((t) => (
                                <TypeBadge key={t.type.name} color={getTypeColor(t.type.name)}>
                                    {t.type.name.toUpperCase()}
                                </TypeBadge>
                            ))}
                        </div>
                    </Section>

                    <StatsSection theme={theme}>
                        <h3>Estatísticas</h3>
                        <div>
                            {pokemon.stats && pokemon.stats.map((stat) => (
                                <div key={stat.stat.name}>
                                    <span>{getStatName(stat.stat.name)}</span>
                                    <StatBar>
                                        <div style={{ width: `${Math.min((stat.base_stat / 255) * 100, 100)}%` }} />
                                    </StatBar>
                                    <span>{stat.base_stat}</span>
                                </div>
                            ))}
                        </div>
                    </StatsSection>

                    <Section theme={theme}>
                        <h3>Habilidades</h3>
                        <div>
                            {pokemon.abilities.map((a) => (
                                <AbilityTag key={a.ability.name}>
                                    {a.ability.name.replace('-', ' ').toUpperCase()}
                                </AbilityTag>
                            ))}
                        </div>
                    </Section>

                    <Section theme={theme}>
                        <h3>Movimentos Principais</h3>
                        <div>
                            {pokemon.moves.slice(0, 8).map((m) => (
                                <MoveTag key={m.move.name}>
                                    {m.move.name.replace('-', ' ').toUpperCase()}
                                </MoveTag>
                            ))}
                        </div>
                    </Section>
                </PokemonInfo>
            </PokemonCard>
        </Container>
    )
}

export default PokemonDetail;