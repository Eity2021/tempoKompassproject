import React from "react";

export default function TermsOfPayment() {
  const terms = {
    heading:
      "font-poppins text-[#181E27]  font-bold   text-[42px]   text-center my-4 ",
    headingPart: " text-[22px]  my-5  font-poppins text-[#181E27]  ",
    para: "font-poppins text-[#181E27]  text-[16px] font-normal mb-2 pl-6",
    link: "text-primary",
  };

  return (
    <div className="container  px-6 lg:px-14 py-24 text-justify">
      <div>
        <h1 className={terms.heading}>
          Terms and Conditions for Payment Collection and Refund
        </h1>
      </div>
      <div>

        <h1 className={terms.headingPart}>Last updated on July 12, 2023</h1>
        <p className={terms.para}>
          These terms and conditions ("Agreement") govern the payment
          collection, refund, and return processes when utilizing a credit
          card/MSF/Online Banking/Online Wallet as the payment method. Please
          read this Agreement carefully before making any payment, requesting a
          refund, or initiating a return. By using your credit card or other
          methods for payment, refund, or return purposes, you agree to be bound
          by this Agreement.
        </p>
      </div>

      <div>
        <h1 className={terms.headingPart}>1. Payment Collection:</h1>
        <p className={terms.para}>
          1.1. When making a purchase using a credit card, you authorize the
          merchant to charge your credit card for the total amount of the
          purchase, including any applicable taxes, fees, or shipping charges.
        </p>
        <p className={terms.para}>
          1.2. The merchant will collect payment in accordance with the terms
          and conditions specified during the purchase transaction.
        </p>
      </div>

      <div>
        <h1 className={terms.headingPart}>2. Refunds:</h1>
        <p className={terms.para}>
          2.1. Refunds may be granted in accordance with the merchant's refund
          policy.
        </p>
        <p className={terms.para}>
          2.2. To request a refund, you must contact the merchant directly and
          provide the necessary information to initiate the refund process.
        </p>
        <p className={terms.para}>
          2.3. The merchant will process the refund to the original credit card
          used for the purchase, subject to the terms and conditions of their
          refund policy and any applicable laws or regulations.
        </p>
        <p className={terms.para}>
        2.4. Our standard refund timeline takes 7 to 10 working days.
        </p>
        
      </div>
      <div>
        <h1 className={terms.headingPart}>3. Returns:</h1>
        <p className={terms.para}>
          3.1. Returns may be accepted by the merchant in accordance with their
          return policy.
        </p>
        <p className={terms.para}>
          3.2. To initiate a return, you must contact the merchant within the
          specified timeframe, as outlined in their return policy.
        </p>
        <p className={terms.para}>
          3.3. The merchant may require you to provide proof of purchase,
          original packaging, and any other relevant documentation to facilitate
          the return process.
        </p>
        <p className={terms.para}>
          3.4. If the return is approved, the merchant will process the refund
          as per their refund policy and any applicable laws or regulations.
        </p>
      </div>
      <div>
        <h1 className={terms.headingPart}>4. Disputes:</h1>
        <p className={terms.para}>
          4.1. In the event of a dispute regarding payment, refund, or return,
          you should contact the merchant first to resolve the issue.
        </p>
        <p className={terms.para}>
          4.2. If you are unable to reach a resolution with the merchant, you
          may contact your credit card issuer to dispute the transaction and
          seek further assistance.
        </p>
      </div>
      <div>
        <h1 className={terms.headingPart}>5. Liability:</h1>
        <p className={terms.para}>
          5.1. The merchant is solely responsible for the payment collection,
          refund, and return processes.
        </p>
        <p className={terms.para}>
          5.2. The credit card issuer bears no liability for any issues arising
          from the payment, refund, or return, including but not limited to
          delays, errors, or disputes.
        </p>
      </div>
      <div>
        <h1 className={terms.headingPart}>6. Governing Law:</h1>
        <p className={terms.para}>
          6.1. This Agreement shall be governed by and construed in accordance
          with the laws of the jurisdiction where the merchant operates.
        </p>
      </div>
      <div>
        <h1 className={terms.headingPart}>6. Governing Law:</h1>
        <p className={terms.para}>
          7.1. The merchant reserves the right to modify or update this
          Agreement at any time without prior notice.
        </p>
        <p className={terms.para}>
          7.2. It is your responsibility to review this Agreement periodically
          for any changes or updates.
        </p>
      </div>
      <p className={terms.para}>
        By using your credit card/other online methods for payment, refund, or
        return purposes, you acknowledge that you have read, understood, and
        agreed to the terms and conditions set forth in this Agreement. If you
        do not agree with any provision of this Agreement, please refrain from
        using your credit card for payment, refund, or return purposes.
      </p>
    </div>
  );
}
