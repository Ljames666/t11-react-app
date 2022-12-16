import { useNavigate } from 'react-router-dom';
import StyledHome from './StyledHome';

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/uir');
    };

    return (
        // @ts-ignore
        <StyledHome col>
            <h1>Join the Dark Side</h1>
            <button onClick={handleClick}> Ir para about</button>
        </StyledHome>
    );
}

export default Home;
