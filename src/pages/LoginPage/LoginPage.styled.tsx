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
    @media screen and (min-width: ${props => props.theme.sizes.desktop}) {
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
    width: 100%;
    max-width: 450px;
    margin: 0 auto;

    @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
      display: block;
      padding-top: 64px;
    }

    @media screen and (min-width: ${props => props.theme.sizes.desktop}) {
      padding-top: 206px;
      width: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: fit-content;
    }

    .text {
      position: relative;
      padding-top: 49px;
      b {
        position: absolute;
        left: 50%;
        top: 4px;
        transform: translateX(-50%);
        display: block;
        font-family: 'Abril Fatface';
        font-weight: 400;
        font-size: 59px;
        line-height: calc(80 / 59);
        text-align: center;

        color: ${props => props.theme.colors.bg.accent};
        margin: 0 auto;

        @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
          font-size: 69px;
          top: -4px;
        }
      }

      .text-body {
        font-size: 13px;
        line-height: calc(16 / 13);
        text-align: center;
        color: ${props => props.theme.colors.text.primary};
        width: 229px;
        margin: 0 auto;
        margin-bottom: 28px;

        @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
          width: 397px;
          font-size: 24px;
          line-height: calc(38 / 24);
          margin-bottom: 32px;
        }
      }

      .text-author {
        position: relative;
        text-align: center;
        color: ${props => props.theme.colors.text.secondaryDark};
        margin: 0 auto;
        width: fit-content;

        @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
          font-size: 20px;
          line-height: calc(24 / 20);
        }

        ::before {
          content: '';
          position: absolute;
          top: -12px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: ${props =>
            props.theme.colors.transparent.decoration};
        }
      }
    }
  }
`;
