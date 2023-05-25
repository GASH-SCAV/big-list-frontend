const PartyModeToggle= ({ partyMode, setPartyMode }) => {
    const onClick = () => {
        const newPartyMode = !partyMode;
        setPartyMode(newPartyMode);
        document.body.classList.toggle('partyMode', newPartyMode);
        const marqs = document.getElementsByTagName('marquee');
        console.log(marqs);
        newPartyMode ? marqs[0].start() : marqs[0].stop();
    };

    return (
        <button className="button partyToggle" onClick={onClick}>{partyMode ? 'Kill the Party' : 'Enable Party Mode'}</button>
    );

};

export default PartyModeToggle;