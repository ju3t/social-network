import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-rangeslider';
import Card from './Card';
import forward from '../../../common/img/icons/forward.svg';
import play from '../../../common/img/icons/play.svg';
import back from '../../../common/img/icons/back.svg';

const Main = styled.div`
    border:1px solid black;
    max-width: 900px;
    margin-top:0px;
`;

const ButtonsArea = styled.div`
    padding-top:20px;
    position: absolute;
    top: -1%;
    left: 27%;
    z-index:2;
   div{

   }
`;

const PlayandPauseBlock = styled.div`

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    button{
        outline: none;   
        background: none;
        border:none;
        box-shadow:none;
        cursor: pointer;
    }

`;

const Play = styled.button`
width: 181px;
display: flex;
justify-content: center;
align-items: flex-start;
img{width: 181px;}
`;

const Next = styled.button`
margin-left:30px;
`;

const styles = {
  deck: {
    position: 'absolute',
    border: '1px solid black',
    top: '1%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '300px',
    width: '900px',
    backgroundColor: 'red',
    zIndex: '1',
  },
};

const colors = [
  'white',
  'green',
  'blue',
  'yellow',
  'pink',
];

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
    this.animation_in_progress = false;
  }

  componentDidMount() {
    const new_cards = [];
    const center = {
      x: parseFloat(this.deck.style.width) / 2,
      y: parseFloat(this.deck.style.height) / 2,
    };
    const total_number_of_cards = 5;
    const middle_card_by_index = Math.floor(total_number_of_cards / 2);
    let newZindex = 0;
    let new_x = 0;
    let new_y = 0;
    let new_scale = 1;

    for (let i = 0; i < 5; i++) {
      if (i < middle_card_by_index) {
        new_x = center.x - (220 * (middle_card_by_index - i));
        new_y = center.y;

        new_x += ((0.333 * 300) * (middle_card_by_index - i));

        newZindex = i;

        new_scale = Math.pow(0.85, (middle_card_by_index - i));
      } else {
        new_x = center.x + (220 * Math.floor(i - middle_card_by_index));
        new_y = center.y;

        new_x -= ((0.333 * 300) * (i - middle_card_by_index));

        newZindex = i * (-1.0);

        new_scale = Math.pow(0.85, (i - middle_card_by_index));
      }

      new_cards.push(
        <Card
          color={colors[i]}
          x={new_x}
          y={new_y}
          z_index={i === middle_card_by_index ? 100 : newZindex}
          scale={new_scale}
        />,
      );
    }
    this.setState({ cards: new_cards });
  }

    handle_next = () => {
      if (!this.animation_in_progress) {
        this.animation_in_progress = true;
        const last_cards_left = this.deck.children[this.deck.children.length - 1].style.left;
        const last_cards_zIndex = this.deck.children[this.deck.children.length - 1].style.zIndex;
        const last_cards_transform = this.deck.children[this.deck.children.length - 1].style.transform;

        for (let i = this.deck.children.length - 1; i > 0; i--) {
          this.deck.children[i].style.transitionDuration = '1.0s';
          this.deck.children[i].style.left = this.deck.children[i - 1].style.left;
          this.deck.children[i].style.zIndex = this.deck.children[i - 1].style.zIndex;
          this.deck.children[i].style.transform = this.deck.children[i - 1].style.transform;
        }

        // create infinite circle
        this.deck.children[0].style.transitionDuration = '1.0s';
        this.deck.children[0].style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => {
          this.deck.children[0].style.transitionDuration = '0.0s';
          this.deck.children[0].style.left = last_cards_left;
          this.deck.children[0].style.zIndex = last_cards_zIndex;

          this.deck.appendChild(this.deck.children[0]);
          setTimeout(() => {
            this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.2s';
            this.deck.children[this.deck.children.length - 1].style.transform = last_cards_transform;
            this.animation_in_progress = false;
          }, 100);
        }, 700);
      } else {

      }
    }

    handle_prev = () => {
      if (!this.animation_in_progress) {
        this.animation_in_progress = true;
        const first_cards_left = this.deck.children[0].style.left;
        const first_cards_zIndex = this.deck.children[0].style.zIndex;
        const first_cards_transform = this.deck.children[0].style.transform;

        for (let i = 0; i < this.deck.children.length - 1; i++) {
          this.deck.children[i].style.transitionDuration = '1.0s';
          this.deck.children[i].style.left = this.deck.children[i + 1].style.left;
          this.deck.children[i].style.zIndex = this.deck.children[i + 1].style.zIndex;
          this.deck.children[i].style.transform = this.deck.children[i + 1].style.transform;
        }

        // create infinite circle
        this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.3s';
        this.deck.children[this.deck.children.length - 1].style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => {
          this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.0s';
          this.deck.children[this.deck.children.length - 1].style.left = first_cards_left;
          this.deck.children[this.deck.children.length - 1].style.zIndex = first_cards_zIndex;

          this.deck.insertBefore(this.deck.children[this.deck.children.length - 1], this.deck.children[0]);
          setTimeout(() => {
            this.deck.children[0].style.transitionDuration = '0.2s';
            this.deck.children[0].style.transform = first_cards_transform;
            this.animation_in_progress = false;
          }, 100);
        }, 700);
      } else {

      }
    }

    handleChangeStart = () => {
      console.log('Change event started');
    };

    handleChange = (value) => {
      this.setState({
        value,
      });
    };

    handleChangeComplete = () => {
      console.log('Change event completed');
    };

    render() {
      const { value } = this.state;
      return (
        <Main>
          <ButtonsArea>
            <PlayandPauseBlock>
              <button onClick={this.handle_prev}><img src={back} alt="" /></button>
              <Play onClick={this.handle_next}><img src={play} alt="" /></Play>
              <Next onClick={this.handle_next}>
                <img src={forward} alt="" />
              </Next>
            </PlayandPauseBlock>
            <Slider
              min={0}
              max={100}
              value={value}
              onChangeStart={this.handleChangeStart}
              onChange={this.handleChange}
              onChangeComplete={this.handleChangeComplete}
            />
          </ButtonsArea>
          <div ref={(ref_id) => this.deck = ref_id} style={styles.deck}>
            {this.state.cards}
          </div>

        </Main>
      );
    }
}

export default Deck;
