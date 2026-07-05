import { LightningElement, wire } from 'lwc';
import getPortfolioData from '@salesforce/apex/PortfolioController.getPortfolioData';

export default class PortfolioHome extends LightningElement {
    portfolio;

    @wire(getPortfolioData)
    wiredPortfolio({ error, data }) {
        if (data) {
            this.portfolio = data;
            console.log(data);
        } else if (error) {
            console.error(error);
        }
    }

    get skillsList() {
        if (this.portfolio && this.portfolio.Skills__c) {
            return this.portfolio.Skills__c.split(',').map(s => s.trim()).filter(s => s);
        }
        return [];
    }
}