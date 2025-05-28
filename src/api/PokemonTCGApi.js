import pokemon from 'pokemontcgsdk'
pokemon.configure({apiKey: '240c50c3-bde1-403b-9b7f-33df54e96a3e'})

export const getAllSets = async () => {
    try {
        const sets = await pokemon.set.all();
        return sets
            .map(set => ({
                name: set.name,
                id: set.id,
                images: set.images,
                releaseDate: set.releaseDate
            }))
            .sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
            .filter((set, index) => ![2, 10, 15, 20, 24, 25, 27, 32, 35, 36, 37, 40, 43, 45,
                47,  50, 51, 53, 56, 60, 62, 67, 69, 74, 81, 86, 94, 99, 102, 107, 112, 115, 120,
                122, 126, 129, 142, 143, 148, 152].includes(index))
    } catch(err) {
        console.error("Error getting sets:", err);
        return [];
    }
}


export const getAllCardsFromSet = async (setId) => {
    try {
        const cards = await pokemon.card.all({
            q: `set.id:${setId}`,
            orderBy: 'number'
        });

        return cards.map(card => ({
            id: card.id,
            name: card.name,
            image: card.images.large,
        }));

    } catch (err) {
        console.error("Error Fetching Cards From Set:", err);
        return [];
    }
}

export const getSingleCard = async (cardId) => {
    try {
        const getPrice = () => {
            const prices = card.tcgplayer.prices;

            return prices.holofoil?.market ||
                prices['1stEditionHolofoil']?.market ||
                prices['1stEdition']?.market ||
                prices.unlimitedHolofoil?.market ||
                prices.reverseHolofoil?.market ||
                prices.normal?.market ||
                prices.foil?.market ||
                prices.rareHolofoil?.market ||
                'N/A';
        };
        const card = await pokemon.card.find(cardId);
        return {
            id: card.id,
            name: card.name,
            types: card.types,
            hp: card.hp,
            attacks: card.attacks,
            weaknesses: card.weaknesses,
            number: card.number,
            set: card.set,
            artist: card.artist || 'N/A',
            image: card.images?.large || '',
            price: getPrice(),
            updated: card.tcgplayer?.updatedAt || 'Unknown date'
        };
    } catch(err) {
        console.error("Error getting single card:", err);
        return null;
    }
}

export const getAllCardsWithName = async (cardName) => {
    try {
        const cards = await pokemon.card.all({
            q: `name:*${cardName}*`,
            orderBy: '-set.releaseDate',
        });

        return cards.map(card => ({
            name: card.name,
            id: card.id,
            image: card.images.large,
        }))

    } catch (err) {
        console.error("Error loading getAllSetsWithName");
        return [];
    }
}



