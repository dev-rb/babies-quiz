import * as React from 'react';
import ReactCardFlip from 'react-card-flip';
import FrontCard from '../FrontCard';
import BackCard from '../BackCard';

interface Props {
    question: string,
    answer: string,
    image: string,
    letter: string
}

const AnimalCard: React.FC<Props> = ({ question, answer, image, letter }) => {
    const [flipped, setFlipped] = React.useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    }
    return (
        <ReactCardFlip isFlipped={flipped}>
            <FrontCard image={image} letter={letter} flipCard={handleFlip} />
            <BackCard answer={answer} question={question} />
        </ReactCardFlip>
    );
}

export default AnimalCard;