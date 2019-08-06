import React, { Component } from 'react';
import moment from 'moment';
import './../css/month-picker.css';
import '../css/picker-styles.css';


export default class MonthPicker extends Component {

    constructor(props){
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        super(props);

        this.state = {
            cells: [],
            selectedDate: props.selectedDate || moment(),
            currentView: props.selectedDate ? "months" : "years",
            renderDate: props.selectedDate ? true : false,
            months: props.months || months
        };

        this.selectCell = this.selectCell.bind(this);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    componentWillMount(){
        let cells =[];
        if (this.state.currentView === "years") {
            let year = moment().year() - 6 ;
            for (let i = 0 ; i< 12 ; i++)
                cells.push(year+i);
        } else {
            cells = this.state.months;
        }
        this.setState({cells:cells});
    }

    selectCell(cellContent, index){
        if(typeof cellContent === 'number'){
            let date = this.state.selectedDate;
            date.year(cellContent);
            this.setState({selectedDate:date});

            let months = this.state.months;
            this.setState({currentView:"months",renderDate:false});
            this.setState({cells:months});
        }else{
            let date = this.state.selectedDate;
            date.month(index);
            this.setState({selectedDate:date, renderDate:true});
            if(this.props.onChange && typeof this.props.onChange === "function")
                this.props.onChange(this.state.selectedDate);
        }
    }

    previous(){
        if(this.state.currentView === "years"){
            let years = this.state.cells;
            for(let i=0; i<12 ; i++)
                years[i] -= 12;
            this.setState({cells:years, renderDate:false});
        }else{
            let cells =[];
            let year = moment().year() - 6 ;
            for(let i = 0 ; i< 12 ; i++)
                cells.push(year+i);
            this.setState({cells:cells});
            this.setState({currentView:"years", renderDate:false});
        }
    }

    next(){
        if(this.state.currentView === "years"){
            let years = this.state.cells;
            for(let i=0; i<12 ; i++)
                years[i] += 12;
            this.setState({cells:years, renderDate:false});
        }else{
            let cells =[];
            let year = moment().year() - 6 ;
            for(let i = 0 ; i< 12 ; i++)
                cells.push(year+i);
            this.setState({cells:cells});
            this.setState({currentView:"years", renderDate:false});
        }
    }

    render() {
        let selectedString="";
        if(this.state.renderDate){
            selectedString = this.state.selectedDate.format("M-YYYY");
        }
        let head =
            <div className="section_mp group_mp">
                <div className="col_mp span_1_of_3_mp arrows_mp" onClick={()=>{this.previous()}}>&lt;</div>
                <div className="col_mp span_1_of_3_mp selected_date_mp">{selectedString}</div>
                <div className="col_mp span_1_of_3_mp arrows_mp" onClick={()=>{this.next()}}>&gt;</div>
            </div>;
        let body = [];
        for (let i = 0 ; i< 12 ; i++){
            let cellContent = this.state.cells[i];
            body.push(
                <div
                    key={i}
                    onClick={()=>{this.selectCell(cellContent, i)}}
                    className={`col_mp span_1_of_3_mp ${this.state.renderDate && (
                        this.state.selectedDate.month() === i && 'active'
                    )}`}
                >
                    {cellContent}
                </div>
            );
        }


        return (
            <div className="simple-month-picker">
                {head}
                {body}
            </div>
        );
    }

}
