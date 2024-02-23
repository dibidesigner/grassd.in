import React from "react";
import "./static/filter.css";
import Navbar from "./Navabar";
import Search from "./Search";
import Footer from "./Footer";
import Navbarspace from "./Navbarspace";
import Cardrive from ".//Cimages/gifimage.png";
import Cararraylist from "../Cararraylist";
import { useEffect } from "react";




function Filterpage(){
    useEffect(()=>{
        document.title="Grassd | Filter-Car";
    },[])
    return(
        <>
          <Navbar />
          <Navbarspace /> 
          <Search />
          <Navbarspace />
          <div className="mainfilter">
            <div className="filter">
                <div className="filterpart">
                    <div className="filtertitle">
                        <label className="textblack">Filter</label>
                    </div>
                    <hr />
                    <div className="filterbox">
                        <label className="textblack">Car Type :</label>
                        <select className="selectbox">
                            <option className="textblack"></option>
                        </select>
                    </div>
                    <div className="filterbox">
                        <label className="textblack">Brand :</label>
                        <select className="selectbox">
                            <option  className="textblack">All</option>
                            <option className="textblack">Fortuner</option>
                            <option className="textblack">Thar</option>
                            <option className="textblack">Compass</option>
                            <option className="textblack">Creta</option>
                            <option className="textblack">Altroz</option>
                            <option className="textblack">Swift</option>
                            <option className="textblack">Fronx</option>
                            <option className="textblack">Breeza</option>
                            <option className="textblack">I 20</option>
                            <option className="textblack">Ignis</option>
                            <option className="textblack">Alto</option>
                            <option className="textblack">Wagnor</option>
                            <option className="textblack">Polo</option>
                            <option className="textblack">Tiago</option>
                            <option className="textblack">Scorpio</option>
                            <option className="textblack">Ertiga</option>
                            <option className="textblack">Kwid</option>
                            <option className="textblack">Hondacity</option>
                            <option className="textblack">Celerio</option>
                            
                        </select>
                    </div>
                    <div className="filterbox">
                        <label className="textblack">Fuel Type :</label>
                        <select className="selectbox">
                            <option className="textblack">Petrol</option>
                            <option className="textblack">Diesel</option>
                            <option className="textblack">CNG</option>
                            <option className="textblack">Electric</option>
                        </select>
                    </div>
                    <div className="filterbox">
                        <label className="textblack">Seating Capacity :</label>
                        <select className="selectbox">
                            <option>7 Person</option>
                        </select>
                    </div>
                    <div className="filterbox">
                        <label className="textblack">Transmission :</label>
                        <select className="selectbox">
                            <option></option>
                        </select>
                    </div>
                    <div className="filterbox">
                        <label className="textblack">Baggage :</label>
                        <select className="selectbox">
                            <option></option>
                        </select>
                    </div>
                    <div className="filterboton">
                        <input type="submit" value="Search" className="filtersearch"/>
                        <input type="submit" value="Clear" className="filterclear"/>
                    </div>
                </div>
                <div className="carlistpart">
                    <div className="carlistpartinnerside">
                    {
                    Cararraylist.map((car)=>{
                        return(
                            <>
                            
                            <div className="mapdata">
                                <h1>{car.id}</h1>
                                <h1>{car.Name}</h1>
                                <h1>{car.Fuel_Type}</h1>
                                <h1>{car.Brand}</h1>
                            </div>    
                                
                            </>
                        )
                    })
                    }
                    </div>
                </div>
            </div>
            <div className="addspace">
                <img src={Cardrive} alt="Car add" />
            </div>

           
            
          </div>
          <Footer />
        </>
    );
}
export default Filterpage;