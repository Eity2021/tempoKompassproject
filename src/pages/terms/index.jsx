import React from "react";

export default function Terms() {
  const terms = {
    heading:
      "font-poppins text-[#181E27]  font-bold   text-[42px]   text-center my-4 ",
    headingPart: "font-poppins text-[#181E27] font-bold  text-[22px]  mb-[15px]",
    para: "font-poppins text-[#181E27] text-[16px] mb-4  font-normal",
    link: "text-primary",
  };
  return (
    <div className="container  px-6 lg:px-14 py-24 text-justify">
      <div>
        <h1 className={terms.heading}>Kompass Terms of Service</h1>
      </div>
      <div>
        <h1 className={terms.headingPart}>Terms of Service Agreement</h1>
        <h1 className={terms.headingPart}>Last updated on July 12, 2023</h1>
        <p className={terms.para}>
          This Terms of Service Agreement (this “Agreement”) is made and entered
          into by and between you, as a User (as defined below), and Kompass
          Technologies Limited as (Kompass). and its subsidiaries and affiliates
          (collectively, “Kompass”). This Agreement contains the terms and
          conditions governing using Kompass Saas applications. Kompass
          directly, and through its website{" "}
          <a href="https://www.hellokompass.com" className="text-primary">
            helloKompass
          </a>{" "}
          and the associated domains thereof (the “Site”), offers customers the
          products and services listed at{" "}
          <a href="https://hellokompass.com/pricing" className="text-primary">
            pricing
          </a>{" "}
          (as such list may be updated, modified, or otherwise changed from time
          to time, collectively, the “Services”).
        </p>
        <p className={terms.para}>
          This Agreement is applicable to all persons who use or access the
          Platform and/or use the Software as a Service, in their company’s
          capacity or in an individual capacity, including authorized users
          representing the company, its employees, or other persons using or
          accessing the Services (collectively, “Users” and each, a “User”).
        </p>
        <p className={terms.para}>
          If User is agreeing to these terms on behalf of a business or an
          individual other than User, User represents and warrants that User has
          the authority to bind that business or other individual to this
          Agreement, and User’s agreement to these terms will be treated as the
          agreement of such business or individual. In that event, “User” also
          refers to that business or individual.. By clicking the applicable
          button to indicate User’s acceptance of this Agreement, or by
          accessing or using the Platform, User agrees, effective as of the date
          of such action, to be bound by the Agreement.
        </p>
        <h4 className={terms.para}>
          If User chooses to subscribe to one or more of the following add-on
          services, then User agrees to be bound by the Service Terms listed
          next to such add-on service(s), each of which is incorporated herein
          by reference, as applicable to User:
        </h4>
      </div>

      <div>
        <h1 className={terms.headingPart}>1. Services Fees and Charges</h1>
        <p className={terms.para}>
          The User agrees to pay the fees for the Services in accordance with
          the applicable fee schedules listed at
          https://hellokompass.com/pricing, and User authorizes Kompass to debit
          User’s designated bank account, or Debit/Credit Card or Paypal account
          as specified by the users through the Platform, for all fees as they
          become payable. Unless otherwise stated in the applicable Service
          Terms, fees for the Services are typically based on the calendar
          months in which user is enrolled in any Services (so, for example, if
          the user is enrolled in a Service Plan for a given calendar month,
          User would be charged for a such month even if User does not run
          payroll in a such month), and such fees are applied in full for a
          given calendar month, regardless of whether User is only enrolled in
          the Services for a portion of such month.
        </p>
        <p  className={terms.para}>
          Except for certain fees for particular add-on services that User has
          opted into, fees for the Services will be billed to User and debited
          from User’s Bank Account on a monthly calendar basis, in arrears.
          Notwithstanding the foregoing, kompass may invoice User for any
          applicable, outstanding fees, and User shall pay such invoice within
          Seven (7) days of receipt thereof via money transfer, ACH, check, or
          any other payment method kompass may deem acceptable in its sole
          discretion. All fees are non-refundable. User agrees to reimburse
          kompass for any sales, use, and similar taxes arising from the
          provision of the Services that any federal, state, or local
          governments may impose. kompass may charge additional fees for
          exception processing, environment settings , and other special services (including
          optional add-on services).
        </p>
        <p  className={terms.para}>
          kompass reserves the right to change the fees for its Services from
          time to time. The User will be notified of any change to existing fees
          at least thirty (30) days before the fee change goes into effect. If a
          fee increase or change to this Agreement is not acceptable to a User,
          the User may change/downgrade/cancel the Services as provided herein
          prior to the time when such fee increase or change to this Agreement
          takes effect. User’s continued use of the Services beyond the
          cancellation window constitutes User’s agreement to those changes. If
          kompass is unable to collect fees due because of insufficient funds in
          User’s Bank Account or for any other reason, User must pay the amount
          due immediately upon demand, plus any applicable exceptions processing
          fees, bank fees, or charges for return items, plus interest at the
          lesser of 18% per annum or the maximum rate permitted by law, plus
          attorneys’ fees and other costs of collection as permitted by law.
        </p>
      </div>

      <div>
        <h1 className={terms.headingPart}>2. Switching Service Plans</h1>
        <p className={terms.para}>
          Kompass currently offers several Service Plans with varying features
          and fee schedules, as well as multiple add-on services that Users can
          choose to opt into for additional fees, unless otherwise stated.
          Before Users may begin to use the Services, User will be asked to
          select a Service Plan from those detailed at{" "}
          <a
            href="https://hellokompass.com/product/pricing"
            className="text-primary" >
            Pricing </a>
          Users may request to change User’s Service Plan via the Platform. If
          User chooses to upgrade from User’s current Service Plan (the “Current
          Plan”) to a more expensive Service Plan (the “New Upgrade Plan”), then
          such upgrade will promptly go into effect, and User will begin
          receiving access to the features and Services available under the New
          Upgrade Plan at the time of such upgrade. The fee schedule for the New
          Upgrade Plan will be applied to User’s Service Plan charge for the
          calendar month in which User upgraded and for each calendar month
          thereafter for so long as User is subscribed to the New Upgrade Plan.
      
        </p>
        <p className={terms.para}>
        If the User chooses to downgrade from User’s Current Plan to a less
          expensive Service Plan (the “New Downgrade Plan”), then the downgrade
          will not go into effect until the beginning of the calendar month
          following the calendar month in which a User elected to downgrade (the
          “Downgrade Election Month”). The User will still receive access to the
          features and Services available with User’s Current Plan until the end
          of the Downgrade Election Month. After the Downgrade Election Month,
          User will lose access to some of the features and Services available
          with the User’s Current Plan and will only have access to the features
          and Services available under User’s New Downgrade Plan. The fee
          schedule for User’s Current Plan will be applied to User’s Service
          Plan charge for the Downgrade Election Month, and the fee schedule for
          the New Downgrade Plan will be applied to User’s Service Plan charge
          for the calendar month following the Downgrade Election Month and for
          each calendar month thereafter for so long as User is subscribed to
          the New Downgrade Plan.
        </p>
      </div>
      <div>
        <h1 className={terms.headingPart}>3. User Accounts</h1>
        <p className={terms.para}>
          To use this Platform, User must have an account with Kompass (an
          “Account”). User hereby authorizes Kompass to obtain and store User’s
          Account information as necessary to make the Platform available to
          User. Kompass app will take access to your Google map location,
          contacts, camera and photo gallery to provide the service properly.
        </p>
      </div>
      <div>
        <h1 className={terms.headingPart}>4. Who May Use the Platform</h1>
        <p className={terms.para}>
          User may use the Platform only if User is thirteen (13) years of age
          or older and is not barred from using the Services under applicable
          law.
        </p>
      </div>
      <div>
        <h1 className={terms.headingPart}>5. Contact Information</h1>
        <p className={terms.para}>
          If the user has any questions about this Agreement, the Platform, or
          the Services, User may contact Kompass at support@hellokompass.com or
          call 88-02-48811450. Kompass Technologies, the provider of the
          Service.Users may report complaints regarding the services by
          contacting the Complaint Assistance Unit in Dhaka at the Department of
          Consumer.
        </p>
        <div className={terms.para}>
          <p className="font-bold">Department of Consumer Affairs.</p>
          <p>Consumer Information & Support Division </p>
          <p>Flat 6B, House 10, Road 1, Block B</p>
          <p>Niketan, Gulshan 1, Dhaka 1212</p>
          <p>Email : Hello@helloKompass.com</p>
          <p>Phone Number: 88-02-48811450</p>
        </div>
      </div>
    </div>
  );
}
