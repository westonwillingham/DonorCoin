import React, { Component } from "react";
import { Form, Button, Input, Message, Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    description: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution, this.state.description)
        .send({
          from: accounts[0],
        });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Grid>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Input
                    label="wei"
                    placeholder="ex: 100000"
                    labelPosition="right"
                    value={this.state.minimumContribution}
                    onChange={(event) =>
                      this.setState({ minimumContribution: event.target.value })
                    }
                  />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Input
                    label="Description"
                    placeholder="ex: Rebuild Bamahian Schoolhouse..."
                    labelPosition="right"
                    value={this.state.description}
                    onChange={(event) =>
                      this.setState({ description: event.target.value })
                    }
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
