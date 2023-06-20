import styled from '@emotion/styled';
import bgTablet from '../../images/form-bg.jpg';
import bgTablet2x from '../../images/form-bg@2x.jpg';
import bgDesktop from '../../images/form-bg.jpg';
import bgDesktop2x from '../../images/form-bg@2x.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${props => props.theme.sizes.desktop}) {
    flex-direction: row;
  }
  .form-container {
    width: 100%;

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
      background: linear-gradient(
          to right,
          ${props => props.theme.colors.transparent.formBg},
          ${props => props.theme.colors.transparent.formBg}
        ),
        url(${bgTablet});

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background: linear-gradient(
            to right,
            ${props => props.theme.colors.transparent.formBg},
            ${props => props.theme.colors.transparent.formBg}
          ),
          url(${bgTablet2x});
      }
    }
    @media screen and (min-width: 1280px) {
      width: 549px;
      background: linear-gradient(
          to right,
          ${props => props.theme.colors.transparent.formBg},
          ${props => props.theme.colors.transparent.formBg}
        ),
        url(${bgDesktop});

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background: linear-gradient(
            to right,
            ${props => props.theme.colors.transparent.formBg},
            ${props => props.theme.colors.transparent.formBg}
          ),
          url(${bgDesktop2x});
      }
    }
  }
  .text-container {
    padding-top: 32px;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    display: none;

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
      display: block;
    }

    @media screen and (min-width: ${props => props.theme.sizes.desktop}) {
      padding-top: 0;
      width: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h2 {
      font-family: 'Abril Fatface';
      font-style: normal;
      font-weight: 400;
      font-size: 34px;
      line-height: calc(38 / 34);
      color: ${props => props.theme.colors.text.primary};
      margin-bottom: 32px;
      text-align: center;
    }
    b {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: calc(38 / 20);
      color: ${props => props.theme.colors.text.primary};
      margin-bottom: 14px;
    }

    ul {
      padding-left: 20px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: calc(17 / 14);

      color: ${props => props.theme.colors.text.secondaryDark};
      margin-bottom: 24px;
      li {
        margin-bottom: 12px;
      }
    }
  }
`;
