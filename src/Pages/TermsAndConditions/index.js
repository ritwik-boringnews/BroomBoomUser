import React from "react";
import {View, Text, ScrollView} from "react-native";
import styles from "./styles";
import BackIcon from "react-native-vector-icons/AntDesign";
const TermsAndConditions = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: "white"}}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 25,
            paddingTop: 20,
            backgroundColor: "black",
          }}>
          <BackIcon
            name="arrowleft"
            color="white"
            size={20}
            style={{marginBottom: 10}}
            onPress={() => navigation.goBack()}
          />
          <View style={{width: "80%"}}>
            <Text
              style={{
                marginLeft: 5,
                color: "white",
                fontSize: 18,
                marginBottom: 20,
                textAlign: "center",
                fontWeight: "400",
              }}>
              Terms and Conditions
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>TERMS AND CONDITIONS FOR USERS</Text>
        </View>
        <View>
          <Text style={styles.paragraph}>
            {"\n"}THIS DOCUMENT IS AN ELECTRONIC RECORD IN TERMS OF INFORMATION
            TECHNOLOGY ACT, 2000 AND RULES THEREUNDER AS APPLICABLE AND THE
            PROVISIONS PERTAINING TO ELECTRONIC RECORDS IN VARIOUS STATUTES AS
            AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000.
          </Text>
          <Text style={styles.paragraph}>
            BROOMBOOM TRANSPORTATION SERVICES PVT. LTD. provides
            technology-based services for booking “Vehicles” (bike, scooty,
            toto, cab) to you (“You” or “Users”) and you agree to obtain certain
            Services (defined hereinafter) offered by third party drivers or
            vehicle operators ("PILOTS") by means of the Company’s website and
            the mobile application “Broomboom” (“Platform”). All the Services
            provided by the Company to you would be by means of your use of the
            Platform. These Terms of Use shall govern the relationship between
            you (the customer) and the Company in the course of provision of the
            Services. These terms of use (“Terms of Use”) mandate the terms on
            which users using the Services will be governed.
            {"\n"} {"\n"}Please read the Terms of Use carefully before using the
            Platform or registering on the Platform or accessing any material or
            information through the Platform.
            {"\n"}
            {"\n"}Use of and access to the Platform is offered to You upon the
            condition of acceptance of all the terms, conditions and notices
            contained in this Terms of Use and Privacy Policy, along with any
            amendments made by the Company at its sole discretion and posted on
            the Platform from time to time.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}1. SERVICES
          </Text>
          <Text style={styles.paragraph}>
            The Platform provides the following services (“Services”) to You:
            {"\n"}
            {"\n"}
            It allows you to pick up and drop off packages from one location to
            the other through the Pilots (“Package Services”).
            {"\n"}
            It allows you to avail transportation services provided by the
            Pilots on our Platform (“Transportation Services”).
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}2. GENERAL TERMS OF USE
          </Text>
          <Text style={styles.paragraph}>
            You must be at least 18 years of age, or the age of legal majority
            in your jurisdiction (if different than 18 years), to obtain an
            account. The Service is not available for use by persons under the
            age of 18 years. You shall not authorize third parties to use your
            account. You shall not allow persons under the age of 18 years to
            receive transportation or logistics services from the Pilots.
            {"\n"}
            {"\n"}
            If the Company becomes aware, or it acquires credible knowledge that
            You have misled us regarding your age, then the Company reserves its
            rights to deactivate the account and You will not be liable to raise
            any claims including any insurance from the Company. The Company
            shall take your booking request and forward it to the Pilot through
            an app-based device operating on GPS-GPRS based device available
            with the Pilot. The Company may monitor and record calls made to the
            Pilots, for the purpose of training and improving customer care
            services, including complaint and quality assurence. The Pilot shall
            have the sole discretion to accept or reject each request for the
            Service. If the Pilot accepts the booking request made by the
            Company, a notification will be sent you with the information
            regarding the Pilot including its name, contact number etc.
            {"\n"}
            {"\n"}
            If the Pilot after accepting the booking request declines/cancels it
            or did not arrive at the location of the user then penalty will be
            charged from the Pilot.
            {"\n"}
            {"\n"}
            The Company shall make reasonable efforts to bring you in contact
            with the Pilot in order to obtain the Service subject to
            availability of the Pilot in or around your location at the time of
            your booking request made to the Company.
            {"\n"}
            {"\n"}
            For the avoidance of doubt, it is clarified that the Company itself
            does not provide the Services. It is the Pilot who shall render the
            Services to you. Even after acceptance of booking, the Pilot may not
            reach your pick-up location or decide not to render his services. in
            which event the Company shall not be held liable but the company
            will charge penalty amount from the pilot. If the user declines the
            booking accepted by the Pilot then penalty will be deducted from the
            user and company is not liable for it.
            {"\n"}
            {"\n"}
            You warrant that the information you provide to the Company is
            accurate and complete. The Company is entitled at all times to
            verify the information that you have provided. You may only access
            the Services using authorized means. The Company shall not be liable
            if you do not download the correct Platform or visit the appropriate
            web portal. The Company reserves the right to discontinue or
            introduce any of the modes of booking Vehicles. You will refrain
            from doing anything which we reasonably believe to be disreputable
            or capable of damaging our reputation and will comply with all
            applicable laws of the Republic of India. You will treat the Pilot
            with respect and not cause damage to their Vehicle or engage in any
            unlawful, threatening, harassing, abusive behaviour or activity
            whilst using their Vehicle;
            {"\n"}
            {"\n"}
            You will not close the audio and visual safety features like camera
            and microphone features enabled by the company for your safety
            during the ride. If you deny the camera and microphone permission
            features then company will not take any type of responsibility of
            your safety. You will be sole responsible for your safety throughout
            the ride and in case if any incident happens with you,you will not
            be able to file any complaints or cases against the company as you
            yourself switched off/ denied the permission of the camera and
            microphone safety features given to you by the company throughout
            the ride.
            {"\n"}
            {"\n"}
            The Company is not responsible for the behaviour, actions or
            inactions of drivers of Vehicles, Pilots or quality of Vehicle which
            you may use. Any contract for the provision of Vehicle for the
            Services is exclusively between you and the Pilot and the Company is
            not a party to the same.
            {"\n"}
            {"\n"}
            You must wear masks,helmets and should follow all the traffic rules
            and regulations throughout the ride. In case if you do not follow
            and maintain the laws and rules and if you will be charged fine by
            any government authority then the company is not responsible for it
            and even for your safety if you do not follow the rules laws and
            regulations then for any events or incidents company is not
            responsible for it.
            {"\n"}
            {"\n"}
            You are not allowed to consume any liquor or harmful addictive
            liquids or drugs or any illegal consumption throughout the ride. If
            you are caught doing any such activities then the company is not
            responsible for it and even if the company wants it can take legal
            steps or provide evidences to the courts or laws(if asked by any law
            authority) against you. Company is not responsible/involved in any
            incidents that disturbs or hampers the laws, rules and regulations
            of the country/state. These things will not be entertained by the
            Company.
            {"\n"}
            {"\n"}
            By using the Platform of the Company, you further agree that:
            {"\n"}
            {"\n"}
            You will download the Application for your sole, personal use and
            will not resell it to a third party; You will not authorize others
            to use your account; You will not assign or otherwise transfer your
            account to any other person or legal entity; You will not use the
            Application for unlawful purposes, including but not limited to
            sending or storing any unlawful material or for fraudulent purposes;
            You will not use the Application to cause nuisance, annoyance or
            inconvenience; You will not impair the proper operation of the
            network; You will not try to harm the Application in any way
            whatsoever; You will not copy, or distribute the Application or
            other Company Content without written permission from the Company;
            You will keep secure and confidential your account password or any
            identification which the Company may provide you which allows access
            to the Application; You will provide the Company with whatever proof
            of identity we may request; In order for us to facilitate UPI
            payments, we are required to conduct a bank account validation and
            Virtual Payment Address (“VPA”) validation. We conduct these
            validations through a third-party service provider. You will only
            use an access point or atleast a 3G data account (AP) which you are
            authorized to use; You will not use the Application with an
            incompatible or unauthorized device; If within 24 hours a user
            creates more than one account on the same device, Broomboom has the
            right to terminate his/her account;
            {"\n"}
            {"\n"}
            The Company reserves the right to immediately terminate your use of
            the Application should you not comply with the any of the rules
            provided in the Auto Terms of Use.
          </Text>
          <Text style={styles.title}>3. REPRESENTATIONS AND WARRANTIES</Text>
          <Text style={styles.paragraph}>
            You shall be required to pay charges for the Services used by you
            either by using the online payment gateway provided in the Platform
            or by paying cash to the Pilots. The Company collects the charges
            for the Services on behalf of the Pilots after obtaining
            authorisation from the Pilots and the payment is remitted to the
            Pilot’s bank account registered with the Company.
            {"\n"}
            {"\n"}
            In case if the online payment of the user fails, user have to pay in
            cash and the pilot is bond to give the fare collected in cash to the
            company within 72hrs. If the pilot doesnot clear the fare amount
            collected in cash to the company, penalty will be charged against
            him and after per 7 days the penalty amount will be increased and
            still if the pilot did not clear the amount legal actions will be
            taken by the company against such events.
            {"\n"}
            {"\n"}
            In respect of the Delivery Services, you will be required settle the
            payments incurred towards the good/products purchased from the
            merchants directly with the Pilots. You agree and acknowledge that
            Broomboom is not in anyway be responsible for the settlement between
            you and the Pilot. The rates of the Services shall be notified on
            the website and mobile application of the Company. The charges for
            the Services shall be updated or amended from time to time at the
            sole discretion of the Company and it shall be your responsibility
            to remain informed about the charges for the Services. You agree
            that you will pay for all Services you purchase from the Pilot
            either by way of online payment or by cash. In the event the payment
            cannot be accepted through the online payment or any other mode, you
            shall be required to pay the charges for the Services availed by way
            of cash. Any payment made is non-refundable. At the end of the
            trip,we will facilitate for you to receive a copy of the invoice
            from the Company on your registered e-mail account with the Company.
            You shall pay the service fees for availing the Package Services
            and/or the Delivery Services at the end of the completion of such
            services, as may be displayed to You on the Platform. You cannot
            initiate another Package Services and/or the Delivery Services until
            You have paid for the previously completed such Package Services
            and/or the Delivery Services. It is clarified that the term “Trip”
            includes a trip for transportation of a passenger by the Pilot.
          </Text>
          <Text style={styles.title}>4. LIABILITY</Text>
          <Text style={styles.paragraph}>
            The information, recommendations provided to you on or through the
            website, or the Platform is for general information purposes only
            and does not constitute advice.{"\n"}
            The Company will reasonably keep the website and the application and
            its contents correct and up to date but does not guarantee that the
            website and/or application are free of errors, defects, malware and
            viruses or that the website and/or application are correct, up to
            date and accurate. The Company shall not be liable for any damage
            arising from the same.{"\n"}
            The Company shall further not be liable for damages resulting from
            the use of or the inability to use the website or the application,
            including – but not limited to – damages resulting from failure or
            delay in delivery of electronic communications, interception or
            manipulation of electronic communications by third parties or by
            computer programs used for electronic communications and
            transmission of viruses.{"\n"}
            The quality of the Services requested through the use of the
            Platform is entirely the responsibility of the Pilot who ultimately
            provides such Services to you and the Company is not liable for the
            same. However, any complaints about the Services provided by the
            Pilot should be submitted to the Company by an email as notified
            from time to time.{"\n"}
            The Company shall not in anyway be responsible for any claims raised
            by You in respect of the products/goods ordered by you in respect of
            the Delivery Services shall be at your own risk and the payment
            shall be settled directly between you and the PIlots. Broomboom does
            not assume any responsibility or liability whatsoever for any
            damage/deficiency or loss of the products/goods.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}
            5. INTELLECTUAL PROPERTY RIGHTS
          </Text>
          <Text style={styles.paragraph}>
            The Company is the sole owner and lawful licensee of all the rights
            to the web site, Platform or any other digital media and its
            contents. The content means its design, layout, text, images,
            graphics, sounds, video, etc. the website, Platform or any other
            digital media content embody trade secrets and intellectual property
            rights protected under worldwide copyright and other laws. All
            titles, ownership and intellectual property rights in the website
            and its content shall remain with the Company, its affiliates,
            agents, authorized representatives or licensor's as the case may be.
            All rights not otherwise claimed under this Terms of Use or by the
            Company are hereby reserved. The information contained in this
            Platform and/or website is intended, solely to provide general
            information for the personal use of the reader, who accepts full
            responsibility for its use.
            {"\n"}
            The Company does not represent or endorse the accuracy or
            reliability of any information or advertisement contained on,
            distributed through, or linked, downloaded or accessed from any of
            the services contained on this website or Platform, or the quality
            of any products, information or other materials displayed, or
            obtained by you as a result of any product, information or other
            materials displayed, or obtained by you as a result of an
            advertisement or any other information or offer in or in connection
            with the service.
            {"\n"}
            All related icons and logos are registered trademarks or service
            marks or word marks of the Company in various jurisdictions and are
            protected under applicable copyrights, trademarks and other
            proprietary rights laws. The unauthorized copying, modification, use
            or publication of these marks is strictly prohibited.
            {"\n"}
            All the contents on this website and/or Platform is copyright of the
            Company except the third party content and link to third party
            website on our website and/or Platform. Subject to your compliance
            with these Terms, the Company grants you a limited non-exclusive,
            non-transferable license to download and install a copy of the
            Platform on a single mobile device that you own or control and to
            run such copy of the Platform solely for your own personal use.
            {"\n"}
            You shall not do the following: license, sublicense, sell, resell,
            transfer, assign, distribute or otherwise commercially exploit or
            make available to any third party the Platform in any way; modify or
            make derivative works based upon the Platform; create Internet
            "links" or "frame" or "mirror" any application on any other server
            or wireless or Internet-based device. Reverse engineer or access the
            Platform in order to:
            {"\n"}
            design or build a competitive product or service, design or build a
            product using similar ideas, features, functions or graphics of the
            Platform, or copy any ideas, features, functions or graphics of the
            Platform, or launch an automated program or script, including, but
            not limited to, web spiders, web crawlers, web robots, web ants, web
            indexers, bots, viruses or worms, or any program which may make
            multiple server requests per second, or unduly burdens or hinders
            the operation and/or performance of the Platform.
          </Text>
          <Text style={styles.title}>{"\n"}6. THIRD-PARTY LINKS</Text>
          <Text style={styles.paragraph}>
            During the use of the website or the application, links to websites
            that are owned and controlled by third parties may be provided from
            time to time in order to enter into correspondence with, purchase
            goods or services from, participate in promotions of third parties.
            These links take you off the website, the application and are beyond
            the Company's control.
            {"\n"}
            During use of the website and the application, you may enter into
            correspondence with, purchase goods and/or services from, or
            participate in promotions of third party Pilots, advertisers or
            sponsors showing their goods and/or services through a link on the
            website or through the application or Service. These links take you
            off the website, the application and the Service and are beyond the
            Company's control. You therefore visit or access these websites
            entirely at your own risk.
            {"\n"}
            Please note that these other websites may send their own cookies to
            users, collect data or solicit personal information, and you are
            therefore advised to check the terms of use or privacy policies on
            those websites prior to using them.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}7.TERMS AND TERMINATION
          </Text>
          <Text style={styles.paragraph}>
            The contract between the Company and you is concluded for an
            indefinite period. You are entitled to terminate the Contract at all
            times by permanent deletion of the Platform installed on your mobile
            device, tablet or any electronic device capable of using the
            Platform thus disabling the use by you of the Platform and the
            Service. The Company is entitled to terminate the contract at all
            times and with immediate effect (by disabling your use of the
            application and the Service) if you: (a) violate or breach any term
            of these Terms of Use, or (b) in the opinion of the Company, misuse
            of the Platform or the Service.
            {"\n"}
            The Company is not obliged to give notice of the termination of the
            contract in advance. After termination the Company will give notice
            thereof in accordance with these Terms of Use.
            {"\n"}
            Neither party hereto shall be responsible for delays or failures in
            performance resulting from acts beyond its reasonable control and
            without its fault or negligence. Such excusable delays or failures
            may be caused by, among other things, strikes, lock-out, riots,
            rebellions, accidental explosions, floods, storms, acts of God and
            similar occurrences.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}8. INDEMNITY
          </Text>
          <Text style={styles.paragraph}>
            You will indemnify and hold the Company harmless, from any and all
            claims, losses, liabilities, damages, expenses and costs (including
            attorneys’ fees and court costs) which result from a breach or
            alleged breach of these Terms of Use by you.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}9. GOVERNING LAW, JURISDICTION AND DISPUTE RESOLUTION
          </Text>
          <Text style={styles.paragraph}>
            These Terms of Use shall be governed by and interpreted in all
            respects in accordance with the laws of the Republic of India.{"\n"}
            Subject to the provisions made in Clause 10.3, the Parties hereby
            submit to the exclusive jurisdiction of the courts of Chinsurah,
            India.{"\n"}
            All disputes arising out of or in relation to these Terms of Use
            shall be settled amicably by the Parties. In the event no amicable
            settlement is arrived at within a period of fifteen (15) days from
            the date of first initiation of the dispute by one Party to other,
            the Parties shall resolve the dispute by means of arbitration
            pursuant to the Arbitration and Conciliation Act, 1996.{"\n"}
            The arbitration proceedings shall be conducted by an arbitral
            tribunal comprising of 1 (one) arbitrator mutually appointed by you
            and the Company. The arbitration proceedings shall be conducted in
            English language only and the seat for arbitration shall be
            Chinsurah, India.{"\n"}
            The award of the arbitral tribunal shall be final and binding.
          </Text>
          <Text style={styles.title}>10. ASSIGNMENT</Text>
          <Text style={styles.paragraph}>
            You may not assign your rights under these Terms of Use without
            prior written approval of the Company.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}11. AMENDMENT
          </Text>
          <Text style={styles.paragraph}>
            These Terms of Use may be amended from time to time and as and when
            required, at the discretion of the Company.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}
            12. SEVERABILITY
          </Text>
          <Text style={styles.paragraph}>
            If any provision or any part of a provision of these Terms of Use is
            invalid, unenforceable or prohibited by applicable laws of the
            Republic of India , such provision or part of provision shall be
            severed from these Terms of Use and shall be considered divisible as
            to such provision or part thereof and such provision or part thereof
            shall be inoperative and shall not be part of the consideration
            moving between you and the Company hereto and the remainder of these
            Terms of Use shall be valid and binding and of like effect as though
            such provision was not included herein.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}13. NOTICES
          </Text>
          <Text style={styles.paragraph}>
            The Company may give notice by means of a general notice on the
            Application, or by electronic mail to your email address on record
            in the Company's account information, or by written communication
            sent by regular mail to your address on record in Company's account
            information.
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>
            TERMS AND CONDITIONS FOR USERS(AUTO)
          </Text>
        </View>
        <View>
          <Text style={styles.paragraph}>
            {"\n"}THIS DOCUMENT IS AN ELECTRONIC RECORD IN TERMS OF INFORMATION
            TECHNOLOGY ACT, 2000 AND RULES THEREUNDER AS APPLICABLE AND THE
            PROVISIONS PERTAINING TO ELECTRONIC RECORDS IN VARIOUS STATUTES AS
            AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000.
          </Text>
          <Text style={styles.paragraph}>
            {"\n"}
            BROOMBOOM TRANSPORTATION SERVICES PVT. LTD. provides
            technology-based services for booking three-wheelers (“Vehicle”) to
            you (“You” or “Users”) and you agree to obtain certain Services
            (defined hereinafter) offered by third party drivers or vehicle
            operators ("Pilots") by means of the Company’s website and the
            mobile application “Broomboom” (“Platform”). All the Services
            provided by the Company to you would be by means of your use of the
            Platform. These Auto Terms of Use shall govern the relationship
            between you (the customer) and the Company in the course of
            provision of the Services. These terms of use (“Auto Terms of Use”)
            mandate the terms on which users using the Services will be
            governed.
            {"\n"}
            {"\n"}
            Please read the Auto Terms of Use carefully before using the
            Platform or registering on the Platform or accessing any material or
            information through the Platform.
            {"\n"}
            {"\n"}
            Use of and access to the Platform is offered to You upon the
            condition of acceptance of all the terms, conditions and notices
            contained in this Terms of Use and Privacy Policy, along with any
            amendments made by the Company at its sole discretion and posted on
            the Platform from time to time.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}1. SERVICES
          </Text>
          <Text style={styles.paragraph}>
            The Platform provides the following services (“Services”) to You:
            {"\n"}
            {"\n"}
            It allows you to pick up and drop off packages from one location to
            the other through the Pilots (“Package Services”).
            {"\n"}
            It allows you to avail transportation services provided by the
            Pilots on our Platform (“Transportation Services”).
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}2. GENERAL TERMS OF USE
          </Text>
          <Text style={styles.paragraph}>
            You must be at least 18 years of age, or the age of legal majority
            in your jurisdiction (if different than 18 years), to obtain an
            account. The Service is not available for use by persons under the
            age of 18 years. You shall not authorize third parties to use your
            account. You shall not allow persons under the age of 18 years to
            receive transportation or logistics services from the Pilots.
            {"\n"}
            {"\n"}
            If the Company becomes aware, or it acquires credible knowledge that
            You have misled us regarding your age, then the Company reserves its
            rights to deactivate the account and You will not be liable to raise
            any claims including any insurance from the Company. The Company
            shall take your booking request and forward it to the Pilot through
            an app-based device operating on GPS-GPRS based device available
            with the Pilot. The Company may monitor and record calls made to the
            Pilots, for the purpose of training and improving customer care
            services, including complaint and quality assurence. The Pilot shall
            have the sole discretion to accept or reject each request for the
            Service. If the Pilot accepts the booking request made by the
            Company, a notification will be sent you with the information
            regarding the Pilot including its name, contact number etc.
            {"\n"}
            {"\n"}
            If the Pilot after accepting the booking request declines/cancels it
            or did not arrive at the location of the user then penalty will be
            charged from the Pilot.
            {"\n"}
            {"\n"}
            The Company shall make reasonable efforts to bring you in contact
            with the Pilot in order to obtain the Service subject to
            availability of the Pilot in or around your location at the time of
            your booking request made to the Company.
            {"\n"}
            {"\n"}
            For the avoidance of doubt, it is clarified that the Company itself
            does not provide the Services. It is the Pilot who shall render the
            Services to you. Even after acceptance of booking, the Pilot may not
            reach your pick-up location or decide not to render his services. in
            which event the Company shall not be held liable but the company
            will charge penalty amount from the pilot. If the user declines the
            booking accepted by the Pilot then penalty will be deducted from the
            user and company is not liable for it.
            {"\n"}
            {"\n"}
            You warrant that the information you provide to the Company is
            accurate and complete. The Company is entitled at all times to
            verify the information that you have provided. You may only access
            the Services using authorized means. The Company shall not be liable
            if you do not download the correct Platform or visit the appropriate
            web portal. The Company reserves the right to discontinue or
            introduce any of the modes of booking Vehicles. You will refrain
            from doing anything which we reasonably believe to be disreputable
            or capable of damaging our reputation and will comply with all
            applicable laws of the Republic of India. You will treat the Pilot
            with respect and not cause damage to their Vehicle or engage in any
            unlawful, threatening, harassing, abusive behaviour or activity
            whilst using their Vehicle;
            {"\n"}
            {"\n"}
            You will not close the audio and visual safety features like camera
            and microphone features enabled by the company for your safety
            during the ride. If you deny the camera and microphone permission
            features then company will not take any type of responsibility of
            your safety. You will be sole responsible for your safety throughout
            the ride and in case if any incident happens with you,you will not
            be able to file any complaints or cases against the company as you
            yourself switched off/ denied the permission of the camera and
            microphone safety features given to you by the company throughout
            the ride.
            {"\n"}
            {"\n"}
            The Company is not responsible for the behaviour, actions or
            inactions of drivers of Vehicles, Pilots or quality of Vehicle which
            you may use. Any contract for the provision of Vehicle for the
            Services is exclusively between you and the Pilot and the Company is
            not a party to the same.
            {"\n"}
            {"\n"}
            You must wear masks,helmets and should follow all the traffic rules
            and regulations throughout the ride. In case if you do not follow
            and maintain the laws and rules and if you will be charged fine by
            any government authority then the company is not responsible for it
            and even for your safety if you do not follow the rules laws and
            regulations then for any events or incidents company is not
            responsible for it.
            {"\n"}
            {"\n"}
            You are not allowed to consume any liquor or harmful addictive
            liquids or drugs or any illegal consumption throughout the ride. If
            you are caught doing any such activities then the company is not
            responsible for it and even if the company wants it can take legal
            steps or provide evidences to the courts or laws(if asked by any law
            authority) against you. Company is not responsible/involved in any
            incidents that disturbs or hampers the laws, rules and regulations
            of the country/state. These things will not be entertained by the
            Company.
            {"\n"}
            {"\n"}
            By using the Platform of the Company, you further agree that:
            {"\n"}
            {"\n"}
            You will download the Application for your sole, personal use and
            will not resell it to a third party; You will not authorize others
            to use your account; You will not assign or otherwise transfer your
            account to any other person or legal entity; You will not use the
            Application for unlawful purposes, including but not limited to
            sending or storing any unlawful material or for fraudulent purposes;
            You will not use the Application to cause nuisance, annoyance or
            inconvenience; You will not impair the proper operation of the
            network; You will not try to harm the Application in any way
            whatsoever; You will not copy, or distribute the Application or
            other Company Content without written permission from the Company;
            You will keep secure and confidential your account password or any
            identification which the Company may provide you which allows access
            to the Application; You will provide the Company with whatever proof
            of identity we may request; In order for us to facilitate UPI
            payments, we are required to conduct a bank account validation and
            Virtual Payment Address (“VPA”) validation. We conduct these
            validations through a third-party service provider. You will only
            use an access point or atleast a 3G data account (AP) which you are
            authorized to use; You will not use the Application with an
            incompatible or unauthorized device; If within 24 hours a user
            creates more than one account on the same device, Broomboom has the
            right to terminate his/her account;
            {"\n"}
            {"\n"}
            The Company reserves the right to immediately terminate your use of
            the Application should you not comply with the any of the rules
            provided in the Auto Terms of Use.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}3. PAYMENT FOR SERVICES
          </Text>
          <Text style={styles.paragraph}>
            You shall be required to pay charges for the Services used by you
            either by using the online payment gateway provided in the Platform
            or by paying cash to the Pilots.
            {"\n"}
            {"\n"}
            In case if the online payment of the user fails, user have to pay in
            cash and the pilot is bond to give the fare collected in cash to the
            company within 72hrs. If the pilot does not clear the fare amount
            collected in cash to the company, penalty will be charged against
            him and after per 7 days the penalty amount will be increased and
            still if the pilot did not clear the amount legal actions will be
            taken by the company against such events.
            {"\n"}
            {"\n"}
            The Company collects the charges for the Services on behalf of the
            Pilots after obtaining authorisation from the Pilots and the payment
            is remitted to the Pilot’s bank account registered with the Company.
            You agree and acknowledge that Broomboom is not in any way be
            responsible for the settlement between you and the Pilot. The rates
            of the Services shall be notified on the website and mobile
            application of the Company. The charges for the Services shall be
            updated or amended from time to time at the sole discretion of the
            Company and it shall be your responsibility to remain informed about
            the charges for the Services. You agree that you will pay for all
            Services to the Pilot either by way of online payment or by cash. In
            the event the payment cannot be accepted through the online payment
            or any other mode, you shall be required to pay the charges for the
            Services availed by way of cash. Any payment made is non-refundable.
            At the end of the trip , we will facilitate for you to receive a
            copy of the invoice from the Company on your registered e-mail
            account with the Company. It is clarified that the term “Trip”
            includes a trip for transportation of a passenger by the Pilot.
          </Text>
          <Text style={styles.title}>4. LIABILITY</Text>
          <Text style={styles.paragraph}>
            The information, recommendations provided to you on or through the
            website, or the Platform is for general information purposes only
            and does not constitute advice. The Company will reasonably keep the
            website and the application and its contents correct and up to date
            but does not guarantee that the website and/or application are free
            of errors, defects, malware and viruses or that the website and/or
            application are correct, up to date and accurate. The Company shall
            not be liable for any damage arising from the same.
            {"\n"}
            {"\n"}
            The Company shall further not be liable for damages resulting from
            the use of or the inability to use the website or the application,
            including – but not limited to – damages resulting from failure or
            delay in delivery of electronic communications, interception or
            manipulation of electronic communications by third parties or by
            computer programs used for electronic communications and
            transmission of viruses. The quality of the Services requested
            through the use of the Platform is entirely the responsibility of
            the Pilot who ultimately provides such Services to you and the
            Company is not liable for the same. However, any complaints about
            the Services provided by the Pilot should be submitted to the
            Company by an email as notified from time to time.
          </Text>
          <Text style={styles.title}>5. INTELLECTUAL PROPERTY RIGHTS</Text>
          <Text style={styles.paragraph}>
            The Company is the sole owner and lawful licensee of all the rights
            to the web site, Platform or any other digital media and its
            contents. The content means its design, layout, text, images,
            graphics, sounds, video, etc. the website, Platform or any other
            digital media content embody trade secrets and intellectual property
            rights protected under worldwide copyright and other laws. All
            titles, ownership and intellectual property rights in the website
            and its content shall remain with the Company, its affiliates,
            agents, authorized representatives or licensor's as the case may be.
            All rights not otherwise claimed under this Auto Terms of Use or by
            the Company are hereby reserved. The information contained in this
            Platform and/or website is intended, solely to provide general
            information for the personal use of the reader, who accepts full
            responsibility for its use. The Company does not represent or
            endorse the accuracy or reliability of any information or
            advertisement contained on, distributed through, or linked,
            downloaded or accessed from any of the services contained on this
            website or Platform, or the quality of any products, information or
            other materials displayed, or obtained by you as a result of any
            product, information or other materials displayed, or obtained by
            you as a result of an advertisement or any other information or
            offer in or in connection with the service. All related icons and
            logos are registered trademarks or service marks or word marks of
            the Company in various jurisdictions and are protected under
            applicable copyrights, trademarks and other proprietary rights laws.
            The unauthorized copying, modification, use or publication of these
            marks is strictly prohibited. All the contents on this website
            and/or Platform is copyright of the Company except the third-party
            content and link to third party website on our website and/or
            Platform. Subject to your compliance with these Terms, the Company
            grants you a limited non-exclusive, non-transferable license to
            download and install a copy of the Platform on a single mobile
            device that you own or control and to run such copy of the Platform
            solely for your own personal use.
            {"\n"}
            {"\n"}
            You shall not do the following: license, sublicense, sell, resell,
            transfer, assign, distribute or otherwise commercially exploit or
            make available to any third party the Platform in any way; modify or
            make derivative works based upon the Platform; create Internet
            "links" or "frame" or "mirror" any application on any other server
            or wireless or Internet-based device Reverse engineer or access the
            Platform in order to:
            {"\n"}
            design or build a competitive product or service, design or build a
            product using similar ideas, features, functions or graphics of the
            Platform, or{"\n"} z` ` copy any ideas, features, functions or
            graphics of the Platform, or launch an automated program or script,
            including, but not limited to, web spiders, web crawlers, web
            robots, web ants, web indexers, bots, viruses or worms, or any
            program which may make multiple server requests per second, or
            unduly burdens or hinders the operation and/or performance of the
            Platform.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}6. THIRD-PARTY LINKS
          </Text>
          <Text style={styles.paragraph}>
            During the use of the website or the application, links to websites
            that are owned and controlled by third parties may be provided from
            time to time in order to enter into correspondence with, participate
            in promotions of third parties. These links take you off the
            website, the application and are beyond the Company's control.
            {"\n"}
            During use of the website and the application, you may enter into
            correspondence with, or participate in promotions of third-party
            Pilots, advertisers or sponsors showing their services through a
            link on the website or through the application or Service. These
            links take you off the website, the application and the Service and
            are beyond the Company's control. You therefore visit or access
            these websites entirely at your own risk.
            {"\n"}
            Please note that these other websites may send their own cookies to
            users, collect data or solicit personal information, and you are
            therefore advised to check the Auto Terms of use or privacy policies
            on those websites prior to using them.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}7.TERMS AND TERMINATION
          </Text>
          <Text style={styles.paragraph}>
            The contract between the Company and you is concluded for an
            indefinite period. You are entitled to terminate the Contract at all
            times by permanent deletion of the Platform installed on your mobile
            device, tablet or any electronic device capable of using the
            Platform thus disabling the use by you of the Platform and the
            Service. The Company is entitled to terminate the contract at all
            times and with immediate effect (by disabling your use of the
            application and the Service) if you: (a) violate or breach any term
            of these Auto Terms of Use, or (b) in the opinion of the Company,
            misuse of the Platform or the Service.
            {"\n"}
            The Company is not obliged to give notice of the termination of the
            contract in advance. After termination the Company will give notice
            thereof in accordance with these Auto Terms of Use.
            {"\n"}
            Neither party hereto shall be responsible for delays or failures in
            performance resulting from acts beyond its reasonable control and
            without its fault or negligence. Such excusable delays or failures
            may be caused by, among other things, strikes, lock-out, riots,
            rebellions, accidental explosions, floods, storms, acts of God and
            similar occurrences. Company is free to take any actions and it is
            not answerable to anyone.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}8. INDEMNITY
          </Text>
          <Text style={styles.paragraph}>
            You will indemnify and hold the Company harmless, from any and all
            claims, losses, liabilities, damages, expenses and costs (including
            attorneys’ fees and court costs) which result from a breach or
            alleged breach of these Auto Terms of Use by you.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}9. GOVERNING LAW, JURISDICTION AND DISPUTE RESOLUTION
          </Text>
          <Text style={styles.paragraph}>
            These Auto Terms of Use shall be governed by and interpreted in all
            respects in accordance with the laws of the Republic of India.{"\n"}
            Subject to the provisions made in Clause 10.3, the Parties hereby
            submit to the exclusive jurisdiction of the courts of Chinsurah,
            India.{"\n"}
            All disputes arising out of or in relation to these Auto Terms of
            Use shall be settled amicably by the Parties. In the event no
            amicable settlement is arrived at within a period of fifteen (15)
            days from the date of first initiation of the dispute by one Party
            to other, the Parties shall resolve the dispute by means of
            arbitration pursuant to the Arbitration and Conciliation Act, 1996.
            The arbitration proceedings shall be conducted by an arbitral
            tribunal comprising of 1 (one) arbitrator mutually appointed by you
            and the Company. The arbitration proceedings shall be conducted in
            English language only and the seat for arbitration shall be
            Chinsurah, India.{"\n"}
            The award of the arbitral tribunal shall be final and binding.
          </Text>
          <Text style={styles.title}>10. ASSIGNMENT</Text>
          <Text style={styles.paragraph}>
            You may not assign your rights under these Terms of Use without
            prior written approval of the Company.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}11. AMENDMENT
          </Text>
          <Text style={styles.paragraph}>
            These Auto Terms of Use may be amended from time to time and as and
            when required, at the discretion of the Company.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}
            12. SEVERABILITY
          </Text>
          <Text style={styles.paragraph}>
            If any provision or any part of a provision of these Auto Terms of
            Use is invalid, unenforceable or prohibited by applicable laws of
            the Republic of India , such provision or part of provision shall be
            severed from these Auto Terms of Use and shall be considered
            divisible as to such provision or part thereof and such provision or
            part thereof shall be inoperative and shall not be part of the
            consideration moving between you and the Company hereto and the
            remainder of these Auto Terms of Use shall be valid and binding and
            of like effect as though such provision was not included herein.
          </Text>
          <Text style={styles.title}>
            {"\n"}
            {"\n"}13. NOTICES
          </Text>
          <Text style={styles.paragraph}>
            The Company may give notice by means of a general notice on the
            Application, or by electronic mail to your email address on record
            in the Company's account information, or by written communication
            sent by regular mail to your address on record in Company's account
            information.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TermsAndConditions;
