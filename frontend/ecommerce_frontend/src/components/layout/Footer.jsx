const Footer = () => {
    return (<div className="ui inverted vertical footer segment" style={{background: 'black'}}>
        <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">
                <div className="three wide column">
                    <h4 className="ui inverted header">About</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus.</p>
                    
                </div>
                <div className="three wide column">
                    <h4 className="ui inverted header">Categories</h4>
                    <div className="ui inverted link list">
                        <a className="item">Banana Pre-Order</a>
                        <a className="item">DNA FAQ</a>
                        <a className="item">How To Access</a>
                        <a className="item">Favorite X-Men</a>
                    </div>
                </div>
                <div className="seven wide column">
                    <h4 className="ui inverted header">About</h4>
                    <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;