import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Start from './Start';
import Home from './Home';
import Fever from './Fever';
import Uticaria from './Uticaria';
import Dyspnea from './Dyspnea';
import Timing from './Timing';
import Recommends from './Recommends';
import Treatments from './Treatments';

const history = new createHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="ui grid">
                    <div className="column">
                        <Route exact path="/" component={Home}/>
                        <Route path="/start" component={Start}/>
                        {
                            // Fever
                        }
                        <Route path="/fever" component={Fever}/>
                        {
                            // Fever Option 1
                             }
                        <Route path="/timing/1" render={() => (
                            <Timing typeid="1" history={history} etio={['Febrile non-hemolytic transfusion reaction']}
                                    timing="During or up to 4 hours post transfusion"/>
                        )}/>
                        <Route path="/recommends/1" render={() => (
                            <Recommends typeid="1" history={history} recs={['No testing required']}/>
                        )}/>
                        <Route path="/treatment/1" render={() => (
                            <Treatments typeid="1" history={history} treats={[
                                'Antipyeretic',
                                'With physician approval transfusion may be resumed cautiously if product still viable'
                            ]}/>
                        )}/>
                        {
                            // Fever Option 2
                        }
                        <Route path="/timing/2" render={() => (
                            <Timing typeid="2" history={history}
                                    etio={['Febrile non-hemolytic transfusion reaction', 'Bacterial contamination', 'Acute hemolytic transfusion reaction']}
                                    timing="Usually within first 15 mintues but may be later"/>
                        )}/>
                        <Route path="/recommends/2" render={() => (
                            <Recommends typeid="2" history={history} recs={['Group & Screen, DAT','Patient blood culture(s)','Urinalysis','If hemolysis suspected (e.g. red urine or plasma) - CBC, electrolytes, creatinine, bilirubin, LDH, aPTT, INR, fibrinogen, haptoglobin, plasma Hb']}/>
                        )}/>
                        <Route path="/treatment/2" render={() => (
                            <Treatments typeid="2" history={history} treats={[
                                'Antipyeretic',
                                'With physician approval transfusion may be resumed cautiously if product still viable'
                            ]}
                                        above="Do not restart transfusion"
                                        below="Return blood product to Transfusion Laboratory"
                            />
                        )}/>
                        {
                            // Uticaria
                        }
                        <Route path="/uticaria" component={Uticaria}/>
                        {
                            // Uticaria Option 1
                        }
                        <Route path="/timing/3" render={() => (
                            <Timing typeid="3" history={history} etio={['Minor allergic']}
                                    timing="During or up to 4 hours post transfusion"/>
                        )}/>
                        <Route path="/recommends/3" render={() => (
                            <Recommends typeid="3" history={history} recs={['No testing required']}/>
                        )}/>
                        <Route path="/treatment/3" render={() => (
                            <Treatments typeid="3" history={history} treats={[
                                'Antihistamine',
                                'With physician approval transfusion may be resumed cautiously if product still viable'
                            ]}
                            />
                        )}/>
                        {
                            // Uticaria Option 2
                        }
                        <Route path="/timing/4" render={() => (
                            <Timing typeid="4" history={history} etio={['Severe allergic']}
                                    timing="Usually early in transfusion"/>
                        )}/>
                        <Route path="/recommends/4" render={() => (
                            <Recommends typeid="4" history={history} recs={['No testing required']}/>
                        )}/>
                        <Route path="/treatment/4" render={() => (
                            <Treatments typeid="4" history={history} treats={[
                                'Antihistamine',
                                'May require steroids'
                            ]}
                                        above="Do not restart transfusion"
                            />
                        )}/>
                        {
                            // Uticaria Option 3
                        }
                        <Route path="/timing/5" render={() => (
                            <Timing typeid="5" history={history} etio={['Anaphylaxis']}
                                    timing="Usually early in transfusion"/>
                        )}/>
                        <Route path="/recommends/5" render={() => (
                            <Recommends typeid="5" history={history} recs={['Group & Screen, DAT','Chest X-Ray and blood gases (if dyspneic)','Haptoglobin and Anti-lgA testing']}/>
                        )}/>
                        <Route path="/treatment/5" render={() => (
                            <Treatments typeid="5" history={history} treats={[
                                'Epinephrine. Washed/plasma depleted blood products pending investigation'
                            ]}
                                        above="Do not restart transfusion"
                                        below="Return blood product to Transfusion Laboratory"
                            />
                        )}/>
                        {
                            // Dyspnea
                        }
                        <Route path="/dyspnea" component={Dyspnea}/>
                        {
                            // Dyspnea Option 1
                        }
                        <Route path="/timing/6" render={() => (
                            <Timing typeid="6" history={history} etio={['Transfusion associated circulatory overload (TACO)']}
                                    timing="Within several hours of transfusion"/>
                        )}/>
                        <Route path="/recommends/6" render={() => (
                            <Recommends typeid="6" history={history} recs={[
                                'Group & Screen, DAT',
                                'Chest X-Ray and blood gases',
                                'Urinalysis',
                                'If sepsis suspected - Patient blood cultures',
                                'If hemolysis suspected (e.g. red urine or plasma) - CBC, electrolytes, creatinine, bilirubin, LDH, aPTT, INR, fibrinogen, haptoglobin, plasma Hb',
                                'If anaphylaxis suspected - Haptoglobin and Anti-IgA testing'
                            ]}/>
                        )}/>
                        <Route path="/treatment/6" render={() => (
                            <Treatments typeid="6" history={history} treats={[
                                'Diuretics, High Fowler\'s position',
                                'Slow transfusion rate with diuretics for future transfusions'
                            ]}
                                        above="Do not restart transfusion"
                                        below="Return blood product to Transfusion Laboratory"
                            />
                        )}/>
                        {
                            // Dyspnea Option 2
                        }
                        <Route path="/timing/7" render={() => (
                            <Timing typeid="7" history={history} etio={['Transfusion related acute lung injury (TRALI)','Anaphylaxis','Bacterial contamination','Acute hemolytic transfusion reaction']}
                                    timing="Within 6 hours of transfusion"/>
                        )}/>
                        <Route path="/recommends/7" render={() => (
                            <Recommends typeid="7" history={history} recs={[
                                'Group & Screen, DAT',
                                'Chest X-Ray and blood gases',
                                'Urinalysis',
                                'If sepsis suspected - Patient blood cultures',
                                'If hemolysis suspected (e.g. red urine or plasma) - CBC, electrolytes, creatinine, bilirubin, LDH, aPTT, INR, fibrinogen, haptoglobin, plasma Hb',
                                'If anaphylaxis suspected - Haptoglobin and Anti-IgA testing'
                            ]}/>
                        )}/>
                        <Route path="/treatment/7" render={() => (
                            <Treatments typeid="7" history={history} treats={[
                                'Assess chest X-Ray for bilateral pulmonary infiltrates',
                                'If present, suspect TRALI - may require vasopressors and respiratory support',
                                'If anaphylaxis suspected, give steroids and epinephrine',
                                'If bacterial contamination suspected, antibiotics should be started immediately',
                                'If acute hemolysis suspected, monitor for hypotension, renal failure and DIC'
                            ]}
                                        above="Do not restart transfusion"
                                        below="Return blood product to Transfusion Laboratory"
                            />
                        )}/>
                        <Route path="/timing/all" render={() => (
                            <Timing typeid="all" history={history} etio={[
                                'Febrile non-hemolytic transfusion reaction',
                                'Allergic reaction or anaphylaxis',
                                'Bacterial contamination',
                                'Acute hemolytic transfusion reaction',
                                'Transfusion related acute lung injury (TRALI)',
                                'Transfusion associated circulatory overload (TACO)',

                            ]}
                                    timing="During or after transfusion"/>
                        )}/>
                        <Route path="/recommends/all" render={() => (
                            <Recommends typeid="all" history={history} recs={[
                                'Group & Screen, DAT',
                                'Chest X-Ray and blood gases',
                                'Urinalysis',
                                'Patient blood cultures',
                                'If hemolysis suspected (e.g. red urine or plasma) - CBC, electrolytes, creatinine, bilirubin, LDH, aPTT, INR, fibrinogen, haptoglobin, plasma Hb',
                                'If anaphylaxis suspected - Haptoglobin and Anti-IgA testing'
                            ]}/>
                        )}/>
                        <Route path="/treatment/all" render={() => (
                            <Treatments typeid="all" history={history} treats={[
                                'Antipyretic and Antihistamine',
                                'May require steroids',
                                'If anaphylaxis suspected, epinephrine',
                                'If significant rigors, consider meperidine (Demerol®)',
                                'Assess chest X-Ray for bilateral pulmonary infiltrates',
                                'If present, suspect TRALI - may require vasopressors and respiratory support',
                                'If TACO suspected, diuretics, oxygen, High Fowler\'s position',
                                'If bacterial contamination suspected, antibiotics should be started immediately',
                                'If acute hemolysis suspected, monitor for hypotension, renal failure and DIC'
                            ]}
                                        above="Do not restart transfusion"
                                        below="Return blood product to Transfusion Laboratory"
                            />
                        )}/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
