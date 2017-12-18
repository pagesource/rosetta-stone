import { css } from 'emotion';
import styled from 'emotion/react';
import React from 'react';
import { theme } from '../theme/index';
import Button from './Button';

const Page = styled.div`
  display: inline-block;
  margin: 2px 2px;
`;
const PageDiv = styled.div`

`;
const PageTab = styled.div`
    width: 50px;
    border-radius: 7px;
    height: 50px;
    text-align: center;
    background: skyblue;
  &:hover{
    background: Aquamarine;
  }
`;
const rightArrow = css`
    font-size: 24px;
    position: relative;
    padding: 0px 5px;
    top: 17px;
    left: -4px;
`;
const PageName = css`
    position: relative;
    top: 15px;
`;
const container = css`
    width: 100%;
    background: aliceblue;
    height: 200px;
`;

const styles = {
  root: {
	width: '100%',
	maxWidth: 700,
	margin: '40px',
  },
  content: {
	margin: '0 16px',
  },
  actions: {
	marginTop: 12,
  },
  backButton: {
	marginRight: 12,
  },
};

class Pagination extends React.PureComponent {

  state = {
	stepIndex: null,
	visited: [],
  };
  handleNext = () =>{
	const { stepIndex } = this.state;
	if (stepIndex < 2) {
	  this.setState({ stepIndex: stepIndex + 1 });
	}
  };
  handlePrev = () =>{
	const { stepIndex } = this.state;
	if (stepIndex > 0) {
	  this.setState({ stepIndex: stepIndex - 1 });
	}
  };
  getStepContent = (stepIndex) =>{
	switch (stepIndex) {
	  case 0:
		return 'First page content......';
	  case 1:
		return 'Second page content......';
	  case 2:
		return 'Third page content......';
	  default:
		return 'Click a page to get started.';
	}
  };

  componentWillMount(){
	const { stepIndex, visited } = this.state;
	this.setState({ visited: visited.concat(stepIndex) });
  }

  componentWillUpdate(nextProps, nextState){
	const { stepIndex, visited } = nextState;
	if (visited.indexOf(stepIndex) === -1) {
	  this.setState({ visited: visited.concat(stepIndex) });
	}
  }

  render(){
	const { stepIndex, visited } = this.state;

	return (
	  <div style={styles.root}>
		<PageDiv linear={false}>
		  <Page completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
			<PageTab onClick={() => this.setState({ stepIndex: 0 })}>
			  <span className={PageName}>1</span>
			</PageTab>
		  </Page>

		  <Page completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
			<PageTab onClick={() => this.setState({ stepIndex: 1 })}>
			  <span className={PageName}>2 </span>
			</PageTab>
		  </Page>

		  <Page completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
			<PageTab onClick={() => this.setState({ stepIndex: 2 })}>
			  <span className={PageName}>3</span>
			</PageTab>
		  </Page>

		</PageDiv>
		<div style={styles.content}>
		  <p className={container}>{this.getStepContent(stepIndex)}</p>
		  {stepIndex !== null && (
			<div style={styles.actions}>
			  <Button disabled={stepIndex === 0} onClick={this.handlePrev} style={styles.backButton}>Prev</Button>
			  <Button style="margin-left: 30px" onClick={this.handleNext}>Next</Button>
			</div>
		  )}
		</div>
	  </div>
	);
  }
}

export default Pagination;