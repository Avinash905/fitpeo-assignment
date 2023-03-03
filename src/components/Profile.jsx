import React from "react";
import "../styles/profile.css";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ActivityCard from "./ActivityCard";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-container">
        <div className="profile-background">
          <BsThreeDots className="menu-dots" />
          <img
            src="https://images.pexels.com/photos/2609226/pexels-photo-2609226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile background"
            className="profile-background-pic"
          />
          <span></span>
        </div>
        <div className="profile-details">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile pic"
            className="profile-image"
          />
          <div className="profile-info">
            <h4 className="profile-name">Jennifer Bennett</h4>
            <span className="profile-work light-text">Product Designer</span>
          </div>
          <div className="profile-other-info">
            <div className="profile-products">
              <h4>1,269</h4>
              <span className="light-text">Products</span>
            </div>
            <div className="profile-followers">
              <h4>1,269</h4>
              <span className="light-text">Followers</span>
            </div>
          </div>
        </div>
        <div className="profile-earning">
          <div className="profile-earning-top">
            <h5 className="card-heading">Earning</h5>
            <AiOutlineInfoCircle />
          </div>
          <div className="profile-earning-data">
            <div className="progress">
              <div className="barOverflow">
                <div className="bar"></div>
              </div>
              <span>76</span>%
            </div>
            <strong className="total-earning">$26,256</strong>
            <span className="sub-text light-text">Earning this Month</span>
            <div className="profile-earning-stats">
              <span className="earning-increment change increment">+2.6%</span>
              <span className="sub-text light-text">From previous period</span>
            </div>
          </div>
        </div>
        <div className="profile-activity">
          <h5 className="card-heading">Recent Activity</h5>
          <ActivityCard
            date={"12"}
            month={"Sep"}
            message={'Responded to need "Volunteer Activities"'}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
