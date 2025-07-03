import figma from "@figma/code-connect";
import { EbayProgressStepper } from "../../packages/ebayui-core-react/src/ebay-progress-stepper";

figma.connect(
  EbayProgressStepper,
  "https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=72990-81100",
  {
    props: {
      vertical: figma.boolean("vertical?"),
    },
    example: (props) => (
      <EbayProgressStepper direction={props.vertical ? "row" : "column"} />
    ),
  },
);
