import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = (theme) => ({
  root: {
    '& .term':{
      margin: '5px 0',
    },
    '& .accordion': {
      backgroundColor: '#eee',
      color: '#000',
      cursor: 'pointer',
      padding: '18px',
      width: '100%',
      border: 'none',
      textAlign: 'left',
      outline: 'none',
      fontSize: '15px',
      transition: '0.4s',
      boxSizing: 'border-box',
      '& small':{
        display: 'block',
        marginLeft: '14px',
      },
      '&:before': {
        content: '"+"',
        color: '#777',
        fontWeight: 'bold',
        float: 'left',
        marginRight: '5px',
      },
      '&:hover': {
          backgroundColor: '#ccc',
      },

      '&.active': {
          backgroundColor: '#ccc',

          '&:before': {
            content: '"‒"',
          },
      },
    },

    '& .panel': {
      padding: '0 54px',
      display: 'none',
      color: '#000',
      backgroundColor: '#ddd',
      overflow: 'hidden',
      '& .term':{
        '& .panel':{
          display: 'block'
        }
      },
      '& .accordion': {
        padding: 0,
        backgroundColor: 'transparent',
        marginLeft: '-13px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.active': {
            backgroundColor: 'transparent',
        },
      }
    }
  },
  tags:{
    '& li': {
      display: 'inline-block',
      margin: '5px 2px',
      fontSize: '13px',
      padding: '7px',
      listStyle: 'none',
      textAlign: 'center',
      background: '#fff',
      color: '#333',
      border: 'solid thin #333',
      verticalAlign: 'middle',
      position: 'relative',
      '& span':{
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 0,
        margin: '.5px',
        lineHeight: '.5em',
        cursor: 'pointer',
        fontFamily: 'sans-serif',
      }
    }
  }
});


class Taxonomy extends Component {

  constructor(props){
    super(props);
    this.ref = React.createRef();

    this.handleAccordion = this.handleAccordion.bind();
    this.removeAssignedTaxonomy = this.removeAssignedTaxonomy.bind();
    this.state = {
      assignedTaxo: ''
    }
  }
  static defaultProps = {
    taxonomyTerms: [],
    outputFieldId: "",
    termsDisplayText: "Taxonomy terms",
    assignedDisplayText: "Assigned taxonomies"
  };

  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    taxonomyTerms: PropTypes.array.isRequired,
    outputFieldId: PropTypes.string.isRequired,
    termsDisplayText: PropTypes.string,
    assignedDisplayText: PropTypes.string,
  };

  parseTerms = (taxoTerms) =>{

    var assignedTaxo = this.state.assignedTaxo;
    let taxo = [];
    for(let i=0; i<taxoTerms.length; i++){

      let value = taxoTerms[i];
      let terms = [];

      let attr = {
        type: "checkbox",
        value: value['code'],
        name: value['label'],
        onChange: (e) => this.handlechecked(e)
      }
      if(assignedTaxo){
        for(let a=0; a<assignedTaxo.length; a++){
          if( assignedTaxo[a]['code'] == value['code']){
            attr['checked'] = true;
          }
        }
      }

      if( Array.isArray(value['children']) && value['children'].length > 0 ){

        var item = [], clss = 'accordion';
        if(value['type']=='volcabulary'){
          item.push(<strong>{value['label']}</strong>);
          item.push(<small>{value['description']}</small>);
        }else{
          item.push(<input {...attr} />);
          item.push(<label>{value['label']}</label>);
          clss += ' active';
        }
        terms.push(
          <div key={i} className="term">
            <div className={clss} onClick={(e)=>(this.handleAccordion(e))}>{item}</div>
            <div className="panel">
              {this.parseTerms(value['children'])}
            </div>
          </div>
        );
      }
      else{
        terms.push(
          <div key={i} className="term">
              <input {...attr} />
              <label>{value['label']}</label>
          </div>
        )
      }

      taxo.push(terms);
    }
    return taxo;
  }

  handlechecked = (e) => {

    var selected = this.state.assignedTaxo;
    selected.push({
      code: e.currentTarget.getAttribute('value'),
      label: e.currentTarget.getAttribute('name')
    });

    this.setState({assignedTaxo: selected});
    var target = document.querySelector(`#${this.props.outputFieldId}`);
    if(target){
      target.innerHTML = JSON.stringify(selected);
    }
  }

  handleAccordion = (e) => {
    var target = e.currentTarget;
    var panel = target.nextElementSibling;
    target.classList.toggle("active");

    if(target.classList.contains("active")){
      panel.style.display = "block";
    }
    else{
      panel.style.display = "none";
    }
  }

  getAssignedTaxonomy = () => {
    var assignedTaxo = this.state.assignedTaxo;

    if(!assignedTaxo){
      var target = document.querySelector(`#${this.props.outputFieldId}`);
      try {
        assignedTaxo = JSON.parse(target.innerHTML);
        this.setState({assignedTaxo: assignedTaxo});
      } catch (e) {}
    }
  }

  parseAssignedTaxonomy = ( taxoTerms ) => {
    var assignedTaxo = this.state.assignedTaxo;
    if(Array.isArray(assignedTaxo)){
      let tags = [];

      for(let a=0; a<assignedTaxo.length; a++){
        tags.push(
          <li key={a}>
            {assignedTaxo[a]['label']}
            <span rel={assignedTaxo[a]['code']} onClick={(e)=>this.removeAssignedTaxonomy(e)}>x</span>
          </li>
        );
      }

      return tags;
    }
  }

  removeAssignedTaxonomy = (e) => {
    var assignedTaxo = this.state.assignedTaxo;
    var taxCode = e.currentTarget.getAttribute('rel');

    var newAssignedTaxo = [];
    for(let i=0; i<assignedTaxo.length; i++){
      if(assignedTaxo[i]['code'] != taxCode){
        newAssignedTaxo.push(
          {
            code: assignedTaxo[i]['code'],
            label: assignedTaxo[i]['label']
          }
        )
      }
    }
    document.querySelector(`#${this.props.outputFieldId}`).innerHTML = JSON.stringify(newAssignedTaxo);
    this.setState({assignedTaxo: newAssignedTaxo});
  }

  render() {
    let {id, classes, style, className, taxonomyTerms, outputFieldId, termsDisplayText, assignedDisplayText} = this.props;

    this.getAssignedTaxonomy();

    return (
      <div id={id} ref={this.ref} className={`${classes.root} ${className}`} style={style}>
        {assignedDisplayText}
        <ul className={classes.tags}>{this.parseAssignedTaxonomy(taxonomyTerms)}</ul>

        {termsDisplayText}
        {this.parseTerms(taxonomyTerms)}
      </div>
    );
  }
}

export default withStyles(styles, { injectTheme: true })(Taxonomy);
