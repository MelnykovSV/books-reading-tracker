import styled from '@emotion/styled';
import bgTablet from '../../images/form-bg.jpg';
import bgTablet2x from '../../images/form-bg@2x.jpg';
import bgDesktop from '../../images/form-bg.jpg';
import bgDesktop2x from '../../images/form-bg@2x.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
  .form-container {
    width: 100%;

    @media screen and (min-width: 768px) {
      background: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgTablet});

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background: linear-gradient(
            to right,
            rgba(9, 30, 63, 0.8),
            rgba(9, 30, 63, 0.8)
          ),
          url(${bgTablet2x});
      }
    }
    @media screen and (min-width: 1280px) {
      width: 549px;
      background: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgDesktop});

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background: linear-gradient(
            to right,
            rgba(9, 30, 63, 0.8),
            rgba(9, 30, 63, 0.8)
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

    @media screen and (min-width: 768px) {
      display: block;
    }

    @media screen and (min-width: 1280px) {
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
      color: #242a37;
      margin-bottom: 32px;
      text-align: center;
    }
    b {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: calc(38 / 20);
      color: #242a37;
      margin-bottom: 14px;
    }

    ul {
      padding-left: 20px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: calc(17 / 14);

      color: #898f9f;
      margin-bottom: 24px;
      li {
        margin-bottom: 12px;
      }
    }
  }
`;
