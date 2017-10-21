import styled, { css } from 'styled-components';
import media from './media';

export const Div = styled.div`
    ${({ relative }) => relative && css`position: relative;`}
    ${({ absolute }) => absolute && css`position: absolute;`}
    ${({ flex }) => flex && css`flex: ${flex};`}
    ${({ height }) => height && css`height: ${height};`}
    ${({ width }) => width && css`width: ${width};`}
    ${({ block }) => block && css`display: block;`}
    ${({ inline }) => inline && css`display: inline-block;`}
    ${({ noOverflow }) => noOverflow && css`overflow: hidden;`}
    ${({ textRight }) => textRight && css`text-align: right;`}
    ${({ textCenter }) => textCenter && css`text-align: center;`}
    ${({ textLeft }) => textLeft && css`text-align: left;`}
    ${({ borderBottom }) => borderBottom && css`border-bottom: ${borderBottom};`}
    ${({ borderRight }) => borderRight && css`border-right: ${borderRight};`}
    ${({ borderLeft }) => borderLeft && css`border-left: ${borderLeft};`}
    ${({ border }) => border && css`border: ${border};`}
    ${({ borderRadius }) => borderRadius && css`border-radius: ${borderRadius};`}
    ${({ marginBottom }) => marginBottom && css`margin-bottom: ${marginBottom};`}
    ${({ marginTop }) => marginTop && css`margin-top: ${marginTop};`}
    ${({ marginLeft }) => marginLeft && css`margin-left: ${marginLeft};`}
    ${({ marginRight }) => marginRight && css`margin-right: ${marginRight};`}
    ${({ padding }) => padding && css`padding: ${padding};`}
    ${({ paddingBottom }) => paddingBottom && css`padding-bottom: ${paddingBottom};`}
    ${({ paddingTop }) => paddingTop && css`padding-top: ${paddingTop};`}
    ${({ paddingLeft }) => paddingLeft && css`padding-left: ${paddingLeft};`}
    ${({ paddingRight }) => paddingRight && css`padding-right: ${paddingRight};`}
    ${({ zIndex }) => zIndex && css`z-index: ${zIndex};`}
    ${({ hideInTablet }) => hideInTablet && css`
        ${media.tablet`
            display: none;
        `}
    `}
    ${({ showInTablet }) => showInTablet && css`
        display: none;
        ${media.tablet`
            display: block;
        `}
    `}
`;

export const Absolute = styled(Div)`
    position: absolute;
    ${({ center, middle }) => (center && middle) && css`
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
    `}
    ${({ center, middle }) => (center && !middle) && css`
        transform: translate(-50%, 0);
        left: 50%;
    `}
    ${({ center, middle }) => (!center && middle) && css`
        transform: translate(0, -50%);
        top: 50%;
    `}
    ${({ top }) => top && css`top: ${top};`}
    ${({ bottom }) => bottom && css`bottom: ${bottom};`}
    ${({ left }) => left && css`left: ${left};`}
    ${({ right }) => right && css`right: ${right};`}
`;

export const Fixed = styled(Absolute)`
    position: fixed;
`;

export const Flex = styled(Div)`
    display: flex;
    ${({ wrap }) => wrap && css`flex-wrap: wrap;`}
    ${({ column }) => column && css`flex-direction: column;`}
    ${({ row }) => row && css`flex-direction: row;`}
    ${({ alignContent }) => alignContent && css`align-content: ${alignContent};`}
    ${({ alignItems }) => alignItems && css`align-items: ${alignItems};`}
    ${({ justifyContent }) => justifyContent && css`justify-content: ${justifyContent};`}
`;

export const Container = styled.div`
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 60px;
    padding-bottom: 80px;
    ${({ flex }) => flex && css`display: flex;`}
    ${media.tablet`
        padding-left: 40px;
        padding-right: 40px;
    `}
`;

export const Relative = styled(Div)`
    position: relative;
`;
