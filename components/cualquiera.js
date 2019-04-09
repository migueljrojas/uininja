function Cualquiera(props) {
    const hola = `${props.name ? props.name : "Cesar"} ${props.lastName ? props.lastName : "Alarcon"}`;

    console.log(hola);

    return (
      <span>
        {hola}
      </span>
    );
}

export default Cualquiera;
