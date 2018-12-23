import React from 'react';
import { Card } from 'semantic-ui-react';
import ProductCard from '../../common/ProductCard/ProductCard';
import axios from 'axios';

import 'semantic-ui-css';
import styles from '../../common/CommonCSS/CommonCSS.css';

export class ProductList extends React.Component {
    state = {
        chemicals: [],
    }

    componentDidMount() {
        const params = new URLSearchParams();
        params.append("category", this.props.category);

        axios.post("http://13.125.89.0/chemical/items_limit.php", params)
            .then(res => {
                const products = res;
                this.setState({ chemicals: products.data[0] });
            })
    }
    
    render () {
        return(
            <div className={styles.productHeading}>
                <div className="tip-heading">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <h4>{this.props.category}</h4>
                </div>
                <div className={styles.rightDiv}>
                    <div className="row">
                        <Card.Group itemsPerRow={4} stackable={true}>
                        { 
                            this.state.chemicals.map((chemical, index) =>
                            <ProductCard 
                                payload={chemical}
                                key={index}
                                src={"http://13.125.89.0/chemical/item_img/" + chemical.image}
                                category={chemical.category}
                                name={chemical.name}
                                description={chemical.brand}
                                rating={chemical.star}
                            />
                        )}      
                        </Card.Group>
                    </div>
                </div>
            </div>
        );
    }
}