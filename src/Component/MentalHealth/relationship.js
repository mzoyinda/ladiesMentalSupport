import React from 'react';
import Collapsible from '../Collapsible/index';
import Card from '../Card/index';

const Index = () => {
    return (
        <div>
            <Collapsible header="Relationship Issues">
                    <Card image="/marriage.png" link="https://marriageaid.ng/"> 
                        <h5><b>Marriage Aid</b></h5>
                        <p>Marriage Aid goal is to reach out and support individuals, couples, families and organisations in order to help create and maintain greater love and health in relationships both at home and work place.</p>
                        <p><b>Location(s): </b>14, Adedotun Dina Crescent, Mende, Maryland, Lagos and <p>CRM Complex, Block D, Suites 5 & 6, Redemption Camp, Ogun State</p> </p>
                </Card>
                <Card image="/2324.png" link="http://www.2324.us/"> 
                        <h5><b>23 24</b></h5>
                    <p>23 24 is a full-fledged relationship management outfit with a focus on relationship and marital development and was established to train and equip people with cutting edge tools to help them stay in great shape relationally and in everyday life</p>
                    <p><b>Location: </b>15, Olubunmi Owa Street, Lekki Phase 1, Lagos AND 11, Toyin Street, Ikeja, Lagos.</p>
                </Card>
                <Card image="/intimacy.jpeg" link="https://intimacyclinic.org/"> 
                        <h5><b>INTIMACY CLINIC</b></h5>
                        <p>A Foremost Professional Clinical Counseling and Therapeutic Intervention Clinic for Couples or Individuals Who Wish To Build Intimacy. When it comes to helping you find answers to all your relationship, Marital and sexual Questions, we are unrivaled.</p>
                        <p><b>Location(s): </b>10 Sumbo Jibowu Street, Off Ribadu Road, Off Awolowo Road, Ikoyi, Lagos and <p>No 135 Ogunlana Drive, Opposite Zenith Bank, By Masha Bus Stop, Surulere,  Lagos State, Nigeria and </p>  <p>Zuma Hall, Randolph Hotel & Suites, Old Aba Road, Rumuogba, Port Harcourt, River State, Nigeria</p> </p>
                </Card>
                    <Card image="/SURE.png" link="https://shcounselingclinic.org.ng/"> 
                        <h5><b>Sure Hope Counseling Clinic</b></h5>
                        <p>professional counseling services available, accessible, and appealing to Corporate Organizations Toddler/Preschoolers, Pre-Teens & Teenagers, Individuals, Married Couple</p>
                        <p><b>Location: </b>99, Idi-Ito B/S, Adjacent Cheshire Home, Poly-Eleyele Road, Ibadan, Nigeria.</p>
                    </Card>
                    <Card image="/marie.png" link="https://www.mariestopes.org.ng/"> 
                        <h5><b>Marie Stopes Nigeria</b></h5>
                    <p>Marie Stopes Nigeria deliveres sexual and reproductive health services to communities across Nigeria, such as: Post-abortion care, HIV / STI screening, Contraception & Family Planning, Pregnancy Care, Cervical cancer screening and preventative therapy, General Health Services</p>
                    <p><b>Location: </b>Lagos Clinic - Surulere Centre - Lawanson, 105 Itire Rd, Surulere, Lagos</p>
                    </Card>
                    <Card image="/SWIM.png" link="https://www.swimfoundation.org.ng/"> 
                        <h5><b>SWiM</b></h5>
                        <p>SWiM – Sisters, Wives and Mothers Foundation is a non-governmental organization that is concerned about meeting the all-round needs of women through qualitative dissemination of precautionary, proactive and preventive information that will help women make the right decisions especially in the area of their emotions, career and relationships.</p>
                        <p><b>Location: </b>6, Patrick Bokkor Crescent, Off Ebitu Ukiwe St, Jabi, Abuja</p>
                    </Card>
            </Collapsible>
        </div>
    ) 
}

export default Index;