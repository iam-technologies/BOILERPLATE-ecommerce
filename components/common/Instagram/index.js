import React, { Component } from 'react';


export default class Instagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {

  }

  render() {
    return (
      <section className="instagram_ui">
        <div className="instagram_ui-title">¡Síguenos en Instagram! <a href="https://www.instagram.com/regalosbebecocholate/" target="blank" className="instagram_ui-title__link">@regalosbebecocholate</a></div>

        <div className="instagram_ui-container">

          {/* <div className="instagram_box_ui">
            <img src="https://instagram.fmad8-1.fna.fbcdn.net/vp/0cd939023358d042ce7ac1adf5703daa/5BCC60D7/t51.2885-15/s150x150/e35/30079964_161743971158689_8440714457335726080_n.jpg" />
          </div>
          <div className="instagram_box_ui">
            <img src="https://instagram.fmad8-1.fna.fbcdn.net/vp/1a79b0ddcc827e8d66fd79de4ae8ee54/5BEBB6C0/t51.2885-15/s240x240/e35/32178568_911809769000256_5582739134339874816_n.jpg" />
          </div>
          <div className="instagram_box_ui">
            <img src="https://instagram.fmad8-1.fna.fbcdn.net/vp/0cd939023358d042ce7ac1adf5703daa/5BCC60D7/t51.2885-15/s150x150/e35/30079964_161743971158689_8440714457335726080_n.jpg" />
          </div>
          <div className="instagram_box_ui">
            <img src="https://instagram.fmad8-1.fna.fbcdn.net/vp/1a79b0ddcc827e8d66fd79de4ae8ee54/5BEBB6C0/t51.2885-15/s240x240/e35/32178568_911809769000256_5582739134339874816_n.jpg" />
          </div>
          <div className="instagram_box_ui">
            <img src="https://instagram.fmad8-1.fna.fbcdn.net/vp/0cd939023358d042ce7ac1adf5703daa/5BCC60D7/t51.2885-15/s150x150/e35/30079964_161743971158689_8440714457335726080_n.jpg" />
          </div> */}

          {/* <!-- LightWidget WIDGET --> */}
          <iframe src="//lightwidget.com/widgets/12295743330d5a0893efe6dcfcb6bf7e.html" scrolling="no" className="lightwidget-widget" title="instagram-widget" />

        </div>


      </section>
    );
  }
}
