import React from 'react';
import { useTranslation } from 'react-i18next';
import { AuroraText } from "@/components/magicui/aurora-text";
import { MaskContainer } from '@/components/ui/svg-mask-effect';
import { PointerHighlight } from '@/components/ui/pointer-highlight';

const Section4 = ({content}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-12 md:py-20 px-4">
      <div className="hidden lg:block mx-auto px-section-sm md:px-section-lg text-center">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
{t("about.section4.reveal.part1")}<span className="text-light-cream">{t("about.section4.reveal.brand")}</span>{t("about.section4.reveal.part2")}<span className="text-light-cream">{t("about.section4.reveal.highlight1")}</span>{t("about.section4.reveal.part3")}<span className="text-light-cream">{t("about.section4.reveal.highlight2")}</span>{t("about.section4.reveal.part4")}<span className="text-light-cream">{t("about.section4.reveal.highlight3")}</span>.
          </p>
        }
        className="h-[40rem] rounded-md  text-white dark:text-black"
      >
{t("about.section4.mask.part1")}<span className="text-light-cream">{t("about.section4.mask.highlight")}</span>{t("about.section4.mask.part2")}
      </MaskContainer>

         
      </div>
            <div className="block lg:hidden mx-auto px-section-sm md:px-section-lg text-center">
<div className="mx-auto text-center py-20 text-2xl font-bold tracking-tight md:text-4xl">
{t("about.section4.mobile.part1")}
<PointerHighlight
  rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
  pointerClassName="text-yellow-500"
>
  <span className="relative z-10">{t("about.section4.mobile.highlight")}</span>
</PointerHighlight>

    </div></div>
    </div>
  );
};

export default Section4;