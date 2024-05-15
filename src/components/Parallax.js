import React, { useEffect } from 'react';
import './Parallax.css'
import bitcoin from '../assets/bitcoin-btc-logo.png'
import avalanche from '../assets/avalanche-avax-logo.png'
import dogecoin from '../assets/643db06c780f9a661179a6e9_Protocol=Dogecoin, Shadow=TRUE.png'
import bnb from '../assets/bnb-bnb-logo.png'
import cardano from '../assets/cardano-ada-logo.png'
import ethereum from '../assets/ethereum-eth-logo.png'
import polygan from '../assets/polygon-matic-logo.png'
import solana from '../assets/solana-sol-logo.png'
import uniswap from '../assets/uniswap-uni-logo.png'
import usdcoin from '../assets/usd-coin-usdc-logo.png'
import tether from '../assets/tether-usdt-logo.png'
import polkadot from '../assets/polkadot-new-dot-logo.png'
import neon from '../assets/sounds/Neon Sound Effect.mp3'
import { Link } from 'react-router-dom';


const Parallax = () => {
    useEffect(() => {
        const sound = document.getElementById('boo');
        const h2 = document.querySelector('.glow');

        const playSound = () => {
            stopSound();
            sound.play();
        };

        const stopSound = () => {
            sound.pause();
            sound.currentTime = 0;
        };

        const h2MouseOverHandler = () => {
            playSound();
        };

        const h2MouseOutHandler = () => {
            stopSound();
        };

        // Add event listeners to play sound on mouseover and stop on mouseout
        h2.addEventListener('mouseover', h2MouseOverHandler);
        h2.addEventListener('mouseout', h2MouseOutHandler);

        // Cleanup function to remove event listeners
        return () => {
            h2.removeEventListener('mouseover', h2MouseOverHandler);
            h2.removeEventListener('mouseout', h2MouseOutHandler);
        };
    }, []);
    useEffect(() => {
        const parallax = (e) => {
            document.querySelectorAll('.object').forEach(function (move) {
                var moving_value = move.getAttribute('data-value');
                var x = (e.clientX * moving_value) / 250;
                var y = (e.clientY * moving_value) / 250;

                move.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };

        document.addEventListener('mousemove', parallax);

        return () => {
            document.removeEventListener('mousemove', parallax);
        };
    }, []);

    return (
        <div className="parallax-container">
            <audio id="boo" src={neon}></audio>
            <Link to={'/CoinSpotlight/coins'}>
            <h2 className="object" data-value="3">
                <a href='' className='glow'>
                    Coin <br />
                    <span>Spotlight</span>
                </a>
            </h2>
            </Link>
            <img src={dogecoin} className="object Dogecoin" data-value="-2" alt="Dogecoin" />
            <img src={avalanche}  className="object avalanche" data-value="6" alt="avalanche" />
            <img src={bitcoin} className="object bitcoin" data-value="4" alt="bitcoin" />
            <img src={cardano} className="object cardano" data-value="8" alt="cardano" />
            <img src={bnb} className="object bnb" data-value="-6" alt="bnb" />
            <img src={ethereum} className="object ethereum" data-value="-4" alt="ethereum" />
            <img src={polygan} className="object polygon" data-value="5" alt="polygon" />
            <img src={solana} className="object solana" data-value="-9" alt="solana" />
            <img src={uniswap} className="object uniswap" data-value="-5" alt="uniswap" />
            <img src={usdcoin} className="object usdcoin" data-value="9" alt="usdcoin" />
            <img src={tether} className="object tether" data-value="-10" alt="tether" />
            <img src={polkadot} className="object polkadot" data-value="10" alt="polkadot" />
        </div>
    );
};

export default Parallax;
