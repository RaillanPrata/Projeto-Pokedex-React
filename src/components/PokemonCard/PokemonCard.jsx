import { Card } from './styles';

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

function PokemonCard({ pokemon, onCLick }) {
    return (
        <Card onCLick={onCLick} role="button" tabIndex={0}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <div className="types">
                {pokemon.types.map((tipo) => (
                    < span key={tipo.type.name}
                        color={getTypeColor(tipo.type.name)} className='type'>
                        {tipo.type.name}
                    </span>
                ))}
            </div>
        </Card >
    )
}

export default PokemonCard;