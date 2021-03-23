import React from 'react'
import styled from 'styled-components';
import hauseIco from '../../assets/images/icons/cheap_hause.svg';

const PopupWrapper = styled.article`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 1em 3em;
    gap: .6em;
    text-align: justify;
    img{
        width: 18%;
        position: absolute;
        right: 4em;
        bottom: 4em;
        opacity: .03;
        filter: hue-rotate(30deg);
    }
    div{
        background-color: ${({theme}) => theme.colors.blackTransparent};
        width: 100%;
        text-align: center;
        padding: 10px;
        color: ${({theme}) => theme.colors.y500};
        font-weight: ${({theme}) => theme.fontWeight.l};
        letter-spacing: .1em;
        text-transform: uppercase;
        margin: 10px 0;
    } 
    span{
        /* color: ${({theme}) => theme.colors.y700}; */
        font-weight: ${({theme}) => theme.fontWeight.l};
    } 
    ol{
        margin: 20px 8%;
    }
    p{
        font-size: 1em;

    }
    @media (max-width: ${({ theme }) => theme.device.m}) {
        padding: 0;
    }
`;

const PopupWindow = () => (
    <PopupWrapper>
        <img src={hauseIco} alt="tani dom"/>
        <h2>Dofinansowania</h2>
        <div>Dofinansowanie &bull; zwrot podatku &bull; odliczenie VAT-u</div>
        <p>
        Te trzy elementy są nieodzwoną składową w trakcie realizacj zlecenia.
            Program <span>"Mój Prąd"</span>, odliczenie podatku dochodowego instalacji 
            fotowoltaicznej jako <span>termomodernizacja w zeznaniu
            rocznym</span> czy <span>zwrot VATu</span>... W przypadku prowadzenia działalności gospodarczej
            znacznie przyspieszają zwrot środków zainwestowanych w odnawialne źródła
            energii.
        </p> 
        <p>
            W tej kwestii również nie stoimy obojętnie w stosunku do klientów. 
        </p>
        <ol>
            <li>Pomagamy w pozysakniu środków z programu rządowego "MÓJ PRĄD"</li>
            <li>Wytłumaczymy w jaki spoosób w zeznaniu rocznym rozliczyć termomodernizację</li>
            <li>Jako płatnik podatku VAT wystawione faktury można rozliczyć jako koszt poniesiony z tytułu
            prowadzenia działalności gospodarczej.</li>
        </ol>
        <p><span>Na każdym etapie realizacji zlecenia, nawet po jej zakończeniu wspieramy naszych klientów.</span></p>
    </PopupWrapper>
)

export default PopupWindow;