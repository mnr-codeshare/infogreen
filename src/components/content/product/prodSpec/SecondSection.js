import React from 'react';
import './ProdSpec.css';
import {RatingRow} from './Ratings';

export const SecondSection = (props)=>{
    return(
        <React.Fragment>
            <div className="col-md-12" style={{paddingLeft:'150px'}}>
                        <div className="prod_heading" style={{width:'auto',margin:'auto',marginBottom:30}}>
                            <span className="dot" style={{background:'#60b3a2'}}></span>
                            <h2>Lorem Ipsum</h2>
                        </div>
                    </div>
                    <div className="col-md-12" style={{backgroundColor:'#ddf3f0',paddingTop:'40px',paddingBottom:'40px',paddingRight:'150px',paddingLeft:'150px'}}>
                        <div className="row" style={{marginLeft:'150px'}}>
                            <div className="col-md-4 row">
                                <RatingRow config={{selected:4,border:true,text:'4.0'}} />
                                <RatingRow config={{selected:5,text:'dolore',hideSubHeading:true}} />
                                <RatingRow config={{selected:2,text:'nulla',hideSubHeading:true}} />
                                <RatingRow config={{selected:3,text:'fusica',hideSubHeading:true}} />
                                <RatingRow config={{selected:4,text:'lorem',hideSubHeading:true}} />
                            </div>

                            <div className="col-md-8 imageCollection">
                            <div style={{textAlign:'right',marginBottom:20}}>
                                <a href="#" style={{color:'#60b3a2'}}>More <i className="fa fa-chevron-right"></i></a> <br/>
                            </div>
                            <div style={{position:'relative'}}>
                                <div className="imageContent-150">
                                        <img className="img-responsive" src="http://lorempixel.com/200/200/sports/" alt="sample"/>
                                    </div>
                                    <div className="imageContent-150">
                                        <img className="img-responsive" src="http://lorempixel.com/200/207/sports/" alt="sample"/>
                                    </div>
                                    <div className="imageContent-150">
                                        <img className="img-responsive" src="http://lorempixel.com/200/208/sports/" alt="sample"/>
                                    </div>
                                    <div className="imageContent-150">
                                        <img className="img-responsive" src="http://lorempixel.com/200/209/sports/" alt="sample"/>
                                    </div>
                                    <div className="imageContent-150">
                                        <img className="img-responsive" src="http://lorempixel.com/200/210/sports/" alt="sample"/>
                                        <div className="overlayBox">
                                            <h3>32</h3>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
        )
}