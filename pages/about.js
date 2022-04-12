import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class About extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h2>About this Application</h2>
          <p>
            This is a dApp (Decentralized Application) that allows users to
            create and manage decentralized philanthropic initiatives. In
            centralized philanthropies, users have little control over where the
            funds they donate are inevitably sent. Donors may trust established
            and competent philanthropies, but are risk averse to donating to new
            initiatives run by unknown or untrusted individuals.
          </p>
          <p>
            This dApp enables contributors to vote on where money is donated in
            these campaigns. The campaign manager cannot send money to fiduciary
            recipients without the majority approval of the contributors.
          </p>
          <h3>How to Use This Application</h3>
          <p>
            If you have an idea for a philanthropic cause, you can{" "}
            <a href="/campaigns/new">create a campaign </a> and set the minimum
            contribution threshold for donors. You will serve as this campaigns
            manager. If users contributes this amount or more, they will be able
            to vote on the campaigns requests. Requests are proposals created by
            the campaign manager to send money to a philanthropic recipient.
          </p>
          <p>
            If you are a campaign contributor, you may vote on campaigns by
            clicking the "Approve" button inside the Campaign Requests. Managers
            can finalize requests once a majority of contributors approve, and
            this money will automatically be sent to the recipients wallet
            address.
          </p>
        </div>
      </Layout>
    );
  }
}

export default About;
