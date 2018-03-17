import React, { Component } from 'react';
import FaAlignJustify from 'react-icons/lib/fa/align-justify';
import FaTh from 'react-icons/lib/fa/th';

import '../../styles/CouponList.css';
import CouponDetail from '../CouponDetail';

class CouponList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            viewStatus: "square",
            showDetail: false
        };
    }

    _viewToSquare() {
        return this.setState({
            viewStatus: "square"
        })
    }

    _viewToList() {
        return this.setState({
            viewStatus: "list"
        })
    }
    
    render() {
        const { viewStatus, showDetail } = this.state;
        console.log(viewStatus);
        return (
            <div className="couponList">
                <div className="couponList__top">
                    <h1>QR / STAMP</h1>
                    <div>
                        <div onClick={this._viewToSquare.bind(this)} className="viewBtn"><FaTh size={35} /></div>
                        <div onClick={this._viewToList.bind(this)} className="viewBtn"><FaAlignJustify size={35} /></div>
                    </div>
                </div>
                <ul className="couponList__lists-list">
                    <li>coupon1</li>
                    <li>coupon2</li>
                    <li>coupon3</li>
                    <li>coupon4</li>
                    <li>coupon5</li>
                    <li>coupon6</li>
                    <li>coupon7</li>
                    <li>coupon8</li>
                    <li>coupon9</li>
                    <li>coupon10</li>
                </ul>
                { showDetail ? (
                    <div></div>
                ) :(
                    <CouponDetail />)
                }
            </div>
        );
    }
}

export default CouponList;