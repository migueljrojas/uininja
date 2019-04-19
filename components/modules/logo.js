import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoSvg = styled.svg`
  width: 100%;
  opacity: 1;
  fill: #000;

  .--red-fill {
    fill: #e65443;
  }

  ._line {
    stroke: #666;
  }
`;

const LogoOutlineSvg = styled.svg`
  width: 100%;
  opacity: 1;
  fill: none;

  ._path {
    stroke: #000;
  }
`;

// ui {
//   &-title {
//     width:70%;
//     min-width: 280px;
//     max-width: 500px;
//     display: block;
//     margin: 0;
//     position: relative;
//   }
//   &-svg {
//     width:100%;
//     min-width: 280px;
//     max-width: 500px;
//     fill:transparent;
//   }
//   &-path {
//     stroke-dasharray: 600;
//     stroke-dashoffset: 600;
//     animation: dash 1s linear forwards, fadeOut 1s 0.5s linear forwards;
//   }
//   &-logo {
//     width:100%;
//     min-width: 280px;
//     max-width: 500px;
//     position: absolute;
//     top:50%;
//     left:50%;
//     transform: translate(-50%, -51%);
//     animation: fadeIn 1s 1s linear forwards;
//     opacity: 0;

//     .-pink {
//         fill: $red;
//     }

//     .line {
//         fill:none;
//         stroke:$gray;
//         stroke-miterlimit:10;
//     }
//   }
// }

export const Logo = (props) => {
  const { className } = props;
  return (
    <LogoSvg
      className={className}
      version="1.1"
      viewBox="0 0 336.591 123.438"
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      y="0px"
    >
      <g>
        <path d="M118.289,33.878v59.414h-9.498V18.153h10.342l40.102,59.414V18.153h9.497v75.139h-10.236L118.289,33.878z" />
        <path d="M182.729,44.958h9.076v48.334h-9.076V44.958z M182.729,30.724h9.076v7.238h-9.076V30.724z" />
        <path d="M251.975,67.331v25.961h-9.075V67.331c0-7.914-5.862-14.457-13.776-14.457c-7.81,0-14.247,6.543-14.247,14.457v25.961 h-9.075V44.958h9.075v4.645c4.116-3.166,9.075-5.594,14.247-5.594c6.226,0,12.136,2.322,16.567,6.754 C250.018,55.194,251.975,60.999,251.975,67.331z" />
        <path d="M262.044,114.839c4.365-9.49,3.758-11.807,3.758-16.061v-53.82h9.076v52.66c0,6.121-0.601,10.174-4.432,12.969 C266.615,113.38,262.044,114.839,262.044,114.839z" />
        <path d="M327.516,44.958h9.075v48.334h-9.075v-5.594c-4.538,3.799-10.236,6.648-16.252,6.648c-6.754,0-13.086-2.533-17.94-7.281 c-4.748-4.854-7.387-11.186-7.387-17.941c0-6.754,2.639-13.084,7.387-17.939c4.854-4.748,11.187-7.281,17.94-7.281 c6.016,0,11.714,2.85,16.252,6.648V44.958z M327.516,69.124c0-8.969-7.282-16.355-16.252-16.355s-16.252,7.387-16.252,16.355 c0,8.971,7.282,16.359,16.252,16.359S327.516,78.095,327.516,69.124z" />
      </g>
      <polygon
        className="--red-fill"
        points="274.824,16.728 267.769,16.728 267.769,30.724 260.771,30.724 260.771,37.735 274.821,37.735 274.821,37.722 274.824,37.722"
      />
      <line
        className="_line"
        x1="94.795"
        x2="94.795"
        y1="0"
        y2="123.437"
      />
      <g>
        <polygon
          className="--red-fill"
          points="9.393,18.153 0,18.153 0,59.409 9.393,55.749"
        />
        <path d="M47.805,65.747c0,10.66-8.547,19.418-19.205,19.418c-10.554,0-19.207-8.758-19.207-19.418v-9.998L0,59.409v6.338 c0,15.83,12.875,28.6,28.6,28.6c15.828,0,28.703-12.77,28.703-28.6V37.073l-9.498,3.703V65.747z" />
        <polygon
          className="--red-fill"
          points="47.805,18.153 47.805,40.776 57.303,37.073 57.303,18.153"
        />
        <polygon
          className="--red-fill"
          points="80.799,18.153 71.301,18.153 71.301,31.618 80.799,27.915"
        />
        <polygon points="71.301,31.618 71.301,93.292 80.799,93.292 80.799,27.915" />
      </g>
    </LogoSvg>
  );
};

export const LogoOutline = (props) => {
  const { strokeWidth, className } = props;
  return (
    <LogoOutlineSvg
      className={className}
      version="1.1"
      viewBox="0 0 336.591 123.438"
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      y="0px"
    >
      <path
        className="_path"
        d="M159.234,18.154h9.497v75.139h-10.236l-40.206-59.414v59.414h-9.498V18.154h10.342l40.102,59.414V18.154z M182.729,37.963 h9.076v-7.238h-9.076V37.963z M182.729,93.293h9.076V44.959h-9.076V93.293z M229.123,44.01c-5.172,0-10.131,2.428-14.247,5.594 v-4.645h-9.075v48.334h9.075V67.332c0-7.914,6.438-14.457,14.247-14.457c7.914,0,13.776,6.543,13.776,14.457v25.961h9.075V67.332 c0-6.332-1.957-12.137-6.284-16.568C241.259,46.332,235.349,44.01,229.123,44.01z M265.802,98.779c0,4.254,0.607,6.57-3.758,16.061 c0,0,4.571-1.459,8.402-4.252c3.831-2.795,4.432-6.848,4.432-12.969v-52.66h-9.076V98.779z M336.591,44.959v48.334h-9.075v-5.594 c-4.538,3.799-10.236,6.648-16.252,6.648c-6.754,0-13.086-2.533-17.94-7.281c-4.748-4.854-7.387-11.186-7.387-17.941 c0-6.754,2.639-13.084,7.387-17.939c4.854-4.748,11.187-7.281,17.94-7.281c6.016,0,11.714,2.85,16.252,6.648v-5.594H336.591z M327.516,69.125c0-8.969-7.282-16.355-16.252-16.355s-16.252,7.387-16.252,16.355c0,8.971,7.282,16.359,16.252,16.359 S327.516,78.096,327.516,69.125z M274.821,37.723h0.003V16.729h-7.056v13.996h-6.998v7.012h14.051V37.723z M94.795,0v123.438 M47.805,40.777v24.971c0,10.66-8.547,19.418-19.205,19.418c-10.554,0-19.207-8.758-19.207-19.418V55.75V18.154H0V59.41v6.338 c0,15.83,12.875,28.6,28.6,28.6c15.828,0,28.703-12.77,28.703-28.6V37.074v-18.92h-9.498V40.777z M71.301,18.154v13.465v61.674 h9.498V27.916v-9.762H71.301z"
        strokeWidth={strokeWidth || '.5'}
      />
    </LogoOutlineSvg>
  );
};

LogoOutline.propTypes = {
  className: PropTypes.string,
  strokeWidth: PropTypes.string,
};

Logo.propTypes = {
  className: PropTypes.string,
};
