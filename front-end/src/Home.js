import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeTextLeft from './components/HomeTextLeft';
import HomeTextRight from './components/HomeTextRight';
import HomeTextTop from './components/HomeTextTop';
import Footer from './components/Footer';

const Home = () => {

    console.log(process.env);
    
    return (
        /*
        <h1 style = {{
            marginBottom: '0px'
        }}>Hand Up Near Me</h1>
        
        <p style = {{fontSize: '25px',
        marginTop: '0px',
        color: '#333333'
    }}>Find free and reduced price public services near you.</p>
    
    <p>Hand Up Near Me is a free service whose purpose is to connect people with services they need. Asking for help is difficult. We're here to lend a hand.</p>
    
    <div style = {{
        float: 'left',
        width: '50%'
    }}>
    <h2>Looking for a service?</h2>
    <p>Click here to begin a search.</p>
    <Link to="/login" style ={{
        color: "white",
        backgroundColor: '#f1356d',
        borderRadius: '8px',
        padding: '5px'
    }}>Search for Services Near You</Link>
    </div>
    
    <div style = {{
        float: 'right',
        width: '50%'
    }}>
    <h2>Are you a provider?</h2>
    <p>Click here to create a profile so others can find you.</p>
    <Link to="/login" style ={{
        color: "white",
        backgroundColor: '#f1356d',
        borderRadius: '8px',
        padding: '5px'
    }}>Create Provider Account</Link>
    </div>
    */
   
   
   <div className="home">

            <HomeTextTop />
   
           <Container>
                <Row>
                    <h1>Hand Up Near Me</h1>
                    <h4>Placeholder ... yada yada yada ...</h4>
                    <br/>
                    <hr/>
                </Row>
                <Row>
                    <Col className="rm-15" sm={5}>
                        <HomeTextLeft />
                    </Col>

                    <Col className="rm-15" sm={2}>
                        
                    </Col>

                    <Col className="rm-15" sm={5}>
                        <HomeTextRight />
                    </Col>
                </Row>

           </Container>

            
            <Footer />

    </div>    
    );
}
 
export default Home;