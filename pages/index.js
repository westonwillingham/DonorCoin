import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import Campaign from "../ethereum/campaign";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }
  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  // class CampaignIndex extends Component {
  //   static async getInitialProps() {
  //     const campaigns = await factory.methods.getDeployedCampaigns().call();
  //     let summaries = [];
  //     for (let i = 0; i < campaigns.length; i++) {
  //       const campaign = Campaign(campaigns[i]);
  //       const summary = await campaign.methods.getSummary().call();
  //       summaries.push(summary);
  //     }

  //     return { campaigns, summaries };
  //   }

  //   async getSummary(campaign) {
  //     const summary = await campaign.methods.getSummary().call();
  //     return summary[5];
  //   }

  //   renderCampaigns() {
  //     const items = this.props.campaigns.map((address) => {
  //       const summary = this.getSummary(Campaign(address));
  //       return {
  //         header: summary,
  //         description: (
  //           <Link route={`/campaigns/${address}`}>
  //             <a>View Campaign</a>
  //           </Link>
  //         ),
  //         fluid: true,
  //       };
  //     });
  //     return <Card.Group items={items} />;
  //   }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
