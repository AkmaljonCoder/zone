import styled from 'styled-components'

export const Logo = styled.img`
    width: 96px;
    height: 34.25px;
    object-fit: contain;
    margin-left: 30px;
    cursor: pointer;
`

export const LinkWr = styled.div`
    display: flex;
    align-items: center;
`

export const Link = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #F9FAFB;
    margin-left: 60px;
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover{
        opacity: 0.7;
    }
`

export const Button = styled.button`
    padding: 12px 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #F9FAFB;
    background: linear-gradient(90.35deg, #2563EB 0.36%, #D946EF 201.02%);
    border-radius: 5px;
    cursor: pointer;
    margin-right: 30px;
    margin-left: 60px;
    border: none;
    transition: all ease 0.3s;

    &:hover{
        opacity: 0.5;
    }

    &:active{
        transform: scale(0.9);
    }
`
