import React from "react";
import {View, Text, ScrollView} from "react-native";
import {List} from "react-native-paper";
import styles from "./styles";
import BackIcon from "react-native-vector-icons/AntDesign";
const Faq = ({navigation}) => {
  // const environment = process.env.NODE_ENV || "development";
  return (
    <ScrollView style={styles.container}>
      {/* <TextInput
        placeholder="Search Issue"
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 50,
          paddingHorizontal: 20,
          paddingVertical: 8,
          marginTop: 20,
          marginBottom: 30,
        }}
      /> */}
      <View style={{flex: 1}}>
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
              FAQs
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.accordionContainer}>
        <List.AccordionGroup>
          <List.Accordion
            title="HOW CAN I BOOK A RIDE ??"
            id="First"
            titleNumberOfLines={5}
            style={styles.accordion}>
            <List.Item
              // description="PICKUP LOCATION > DESTINATION > REQUEST BB > BOOKED (NOTIFIED WHEN ACCEPTED BY PILOT)"
              description="PICKUP LOCATION > DESTINATION > REQUEST BB > BOOKED (NOTIFIED WHEN ACCEPTED BY PILOT)"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>

          <List.Accordion
            title="HOW CAN I BOOK LATER A RIDE ??"
            id="Second"
            titleNumberOfLines={5}
            style={styles.accordion}>
            <List.Item
              description="PICKUP LOCATION> DESTINATION> DAY> TIME> BOOK NOW> PAY NOW/LATER/ADVANCE PAYMENT"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>

          <List.Accordion
            title="HOW CAN I UPDATE MY MOBILE NO/ EMAIL ID??"
            id="Third"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="HELP AND SUPPORT > RAISE A TICKET."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW CAN I CHANGE LANGUAGE??   ??"
            id="fourth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="MENU>SETTINGS>LANGUAGE CHOOSE."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW CAN I CHECK THE FARE OF THE RIDE??"
            id="fifth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="PICKUP LOCATION> DESTINATION> CHECK PRICE { VARIES DEPENDING ON THE LOCATION, TIME & AVAILABILITY OF PILOT}"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="PICKUP LOCATION> DESTINATION> CHECK PRICE { VARIES DEPENDING ON THE LOCATION, TIME & AVAILABILITY OF PILOT}"
            id="sixth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="CLICK ON ICON BESIDE FARE> CHART OPEN ( IT INCLUDES  BASE FARE, RIDE TIME FARE ,DISCOUNT) "
              descriptionNumberOfLines={5}
            />
          </List.Accordion>

          <List.Accordion
            title="HOW TO APPLY COUPON CODE ? "
            id="seventh"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="WHILE BOOKING > APPLY COUPON CODE > APPLY   ( READ T & C ) "
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="WHERE CAN I FIND MY PILOT DETAILS ?"
            id="eight"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="BOOK > CONFIRM BY PILOT >< PILOT DETAILS (INCLUDE CONTACT INFORMATION ) > CHAT / CALL OPTION "
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW MUCH TIME PILOT TAKES TO ARRIVE AT YOUR PICK UP LOCATION  "
            id="nineth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="BOOK > > ESRTIMATED TIME (VARIES ON TRAFFIC , CONGESTION , WEATHER )  "
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW DO I USE PIN TO START MY RIDE ?"
            id="tenth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="AFTER BOOKING > PIN GENERATED  > TRACK RIDE PAGE ( SHARE PIN WITH PILOT > START TRIP) "
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW CAN I TIP THE PILOT ?"
            id="eleventh"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="RIDE STARTED > TIP YOUR PILOT : TOKEN OF APPRECIATION { TOA } ."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO RECEIVE INVOICE IN MY EMAIL ?"
            id="twelveth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="RAISE A TICKET ."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO UNDERSTAND CHARGES OF INVOICE?"
            id="thirteenth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="RIDE FARE BREAKUP=CHARGES IN INVOICE . "
              descriptionNumberOfLines={5}
            />
          </List.Accordion>

          <List.Accordion
            title="HOW CAN I LINK / UNLINK A WALLET ? "
            style={styles.accordion}
            id="fourteenth"
            titleNumberOfLines={5}>
            <List.Item
              description="MENU > PAYMENT > CHOOSE WALLET (OF YOUR CHOICE)  > LINK / UNLINK ( SAME NO SHOULD BE REGISTER WITH WALLET THAT OF BROOMBOOM ) ."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW CAN I CHANGE PAYMENT METHOD ? "
            id="fifteenth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="MENU > PAYMENT MODE > SELECT WHILE BOOKING . "
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="COMPONENT OF BROOMBOOM WALLET  ? "
            id="sixteenth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="I .  BB MONEY :  AMOUNT RECHARGED  BY YOU IN WALLET  
           II. BB COINS:  APPLY COUPONS/OFFERS > CASHBACK CREDITED AS  COINS> VALID FOR 1 YEAR
"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW CAN I ADD  MONEY/ RECHARGE WALLET?"
            id="seventeenth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="MENU> PAYMENT> RECHAREG MODE"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="CAN I  TRANSFER MONEY FROM M Y WALLET?"
            id="eighteenth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="CURRENTLY WE DON’T HAVE THAT FACILITIES"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW CAN I CHECK  MY WALLET BALANCE?"
            id="nineteenth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="MENU> WALLET> BALANCE."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW CAN I CHECK BB COINS?"
            id="twenty"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="MENU>WALLET>COIN BALANCE> REDEEM(IF YOU WANT)"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="VALUE OF BB COINS??"
            id="twentyOneth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="1 BB COIN= 1 INR"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO EARN BB COINS?"
            id="twentyTwoth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="APPLY COUPONS/ OFFER/REFERRALS> COINS CREDITED TO WALLET( AFTER COMPLETING A RIDE OF 10KM)"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="CAN I CLUB BB COINS WITH OFFER/ COUPON AVAILABLE??"
            id="twentyThird"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="YES, PAYMENT MODE> OFFERS APPLY> SELECT COINS(OPRTIONAL)"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO CHECK VALIDITY OF MY COINS??"
            id="twentyFourth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="MENU> PAYMENT > BB WALLET> VIEW ALL TRANSACTIONS> CLICK ON RELEVANT COINS CREDIT  TRANSACTION> EXPIRY DATE(GIVEN THERE)
              OR 
              COINS ICON ON HOME SCREEN> VIEW ALL TRANSACTIONS> CLICK ON RELEVANT COIN CREDIT TRANSACTION > (VIEW) EXPIRY DATE
"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW CAN I REFER A PERSON?"
            id="twentyFifth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="LEFT MENU>  INVITE FRIENDS > CODE GENERATED (REFER VALUE= RIDER GETS 25 BB COINS) > SELECT CODE > SEND"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO VIEW STATUS OF MY REFERRALS??"
            id="twentySixth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="NAVIGATE TO LEFT MENU> INVITE FRIENDS > CLICK ON TOTAL REWARD OPTION ( AT BOTTOM)> USE IN NEXT RIDE"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="WHEN CAN I USE  MY REFERRAL AMOUNT EARNED??"
            id="twentySeventh"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="FRIEND LOGIN(BY CODE GIVEN BY YOU)> COMPLETE A RIDE OF 10 KM> REFERRAL AMOUNT EARNED CAN BE USED  BY YOU."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW CAN I REFER A PERSON ?"
            id="twentyEight"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="LEFT MENU > INVITE FRIENDS > CODE GENERATED(REFER VALUE=REFER GETS 25BB COINS) > SELECT CODE > SEND"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO VIEW STATUS OF MY REFERRALS ??"
            id="twentyNineth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="NAVIGATE TO LEFT MENU > INVITE FRIENDS > CLICK ON TOTAL REWARD OPITON(AT BOTTOM) > USE IN NEXT RIDE"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="WHEN CAN I USE MY REFERRAL AMOUNT EARNED ??"
            id="thirty"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="FRIEND LOGIN (BY CODE GIVE BY YOU) > COMPLETE A RIDE OF 10KM > REFERRAL AMOUNT EARNED CAN BE USED BY YOU ."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="WHAT DOES THE REFFER GETS BY LOGIN FROM REFERRAL CODE ?"
            id="thirtyOneth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="LOGIN > REFERRAL CODE INPUT > COMPLETE A RIDE > GET(MAX) DISCOUNT FOR SECOND RIDE."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="WHAT ARE THE FEATURES AVAILABLE  FOR  BOTH FEMALE/MALE RIDER SAFETY?"
            id="thirtytwoth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="CAMERA AND MICROPHONE  FEATURES ENABLE ."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="WHAT IS MAGIC PASS?"
            id="thirtythree"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="SUBSCRIPTION BASED PROGRAM FOR REGULAR RIDES."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO AVAIL/ BUY MAGIC PASS?"
            id={34}
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="MENU > MAGIC PASS AVAIL/ BUY> UNLOCK DISCOUNT ON RIDES"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW CAN I  RENEW MY MAGIC PASS?"
            id="thirtyFifth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="ELIGIBLE PASSES(BASED ON T&Cs ) CLICK > RENEW> PAYMENT MODE"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO CHECK STATUS OF MAGIC PASS?"
            id="thirtySixth"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="MENU> MAGIC PASS> VIEW NO. OF RIDES LEFT,VALIDITY,T&Cs OF THE PASS"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO GET MAXIMUM DISCOUNTS FROM MAGIC PASS?"
            id="thirtySeventh"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="MENU> MAGIC PASS> ACHIEVE TARGETS (i.e. NO OF RIDES)> UNLOCK MAXIMUM DISCOUNTS"
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO EARN MAX. DISCOUNTS/OFFERS AFTER BUYING MAGIC PASS?"
            id="thirtyEight"
            style={styles.accordion}
            titleNumberOfLines={5}>
            <List.Item
              description="BY REFERRING ATLEAST 50 FRIENDS> COMPLETE THEIR FIRST RIDE AFTER LOGGING IN WITH YOUR REFERRAL CODE."
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
          <List.Accordion
            title="HOW TO REDEEM THESE MAX. DISCOUNTS /OFFERS  AFTER REFERRING?"
            style={styles.accordion}
            id={39}
            titleNumberOfLines={5}>
            <List.Item
              description={
                "MENU> MAGIC PASS> REFERRAL AMOUNT EARNED> USED( ONLY  IF YOUR REFERREE COMPLETE 10 KM FIRST RIDE BY JOINING WITH YOUR REFERRAL CODE.)"
                //  +environment
              }
              descriptionNumberOfLines={5}
            />
          </List.Accordion>
        </List.AccordionGroup>
      </View>
    </ScrollView>
  );
};

export default Faq;
