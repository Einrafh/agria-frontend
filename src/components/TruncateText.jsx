const TruncateText = ({text, maxWords}) => {
    if (!text || typeof text !== 'string') return null;
    const words = text.split(' ');

    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }

    return text;
};

export default TruncateText;