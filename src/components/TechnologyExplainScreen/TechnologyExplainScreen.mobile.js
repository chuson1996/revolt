import React from 'react';
import { Img } from 'theme/image';
import revoltShoeSrc from 'assets/revolt-shoe-outside.png';
import revoltBackSrc from 'assets/revolt-shoe-back.png';
import {
    MobileAndTabletOnly,
    DesktopOnly,
    Div,
} from 'theme/grid';
import { Explain, Container, ThumbnailImg, RevoltShoeOutsideImg, RevoltShoeBackImg } from './TechnologyExplainScreen.style';
import { OverLogo } from 'components/Menu/Menu';

class ShoeImagePicker extends React.Component {
  images = [
    revoltShoeSrc,
    revoltBackSrc,
  ];

  state = {
    selectedIndex: 0,
  };

  select = (index) => {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    const { selectedIndex } = this.state;

    return (
      <div>
        <MobileAndTabletOnly>
          <Img
            width="100%"
            src={revoltShoeSrc}
            alt={'Revolt Plain Shoe'}/>
        </MobileAndTabletOnly>
        <DesktopOnly>
          {selectedIndex === 0 &&
            <RevoltShoeOutsideImg
              src={this.images[selectedIndex]}
              alt={'Revolt Plain Shoe'}/>
          }
          {selectedIndex === 1 &&
            <RevoltShoeBackImg
              src={this.images[selectedIndex]}
              alt={'Revolt Plain Shoe'}
            />
          }
          <Div textRight marginRight="-13rem">
            {this.images.map((src, index) =>
              <ThumbnailImg src={src} key={index} onClick={() => this.select(index)} />
            )}
          </Div>
        </DesktopOnly>
      </div>
    );
  }
}

export default function TechnologyExplainScreen() {
  return (
    <Container relative>
      <OverLogo/>
      <ShoeImagePicker/>

      <Explain>
        <div>
          <h2 className="balance-text">Science Behind the Technology</h2>
          <p>Resting on the foundation of its innovative cushioning material, adidas along with BASF, the world's leading chemical company, designed an ambitious midsole system that would carry the Three Stripes brand back to sneaker supremacy.</p>
        </div>
        <div>
          <p>We use the finest recycled fibers which provide the best comfort and durability while giving a helping hand in saving our planet earth. Also, we apply the most advanced cushioning technology (TPU) to forge our energy-support midsole. Revolt sneakers will not only look impressive on your feet but also propel;s them forward using the energy from your footstrike; the more power you give when walking, the more you feel like walking on the air.</p>
        </div>
      </Explain>
    </Container>
  );
}
