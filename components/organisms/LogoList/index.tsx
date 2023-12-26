import { FaReact, FaGithub, FaGoogle, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiFlutter } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import Text from 'components/atoms/Text';
import Image from 'next/image';
import React from 'react';

const LogoList = () => {
  return (
    <div className="flex flex-col gap-2" data-aos="fade-left">
      <Text value="TOOLS" textStyle="SectionBadge" />
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight">
        <div className="">
          <FaReact fontSize={60} className="text-gray-400" />
        </div>
        <div className="">
          <FaVuejs fontSize={60} className="text-gray-400" />
        </div>
        <div className="">
          <SiFlutter fontSize={60} className="text-gray-400" />
        </div>
        <div className="">
          <FaGithub fontSize={60} className="text-gray-400" />
        </div>
        <div className="">
          <FaGoogle fontSize={60} className="text-gray-400" />
        </div>
        <div className="">
          <SiTypescript fontSize={60} className="text-gray-400" />
        </div>
        <div className="">
          <DiNodejs fontSize={60} className="text-gray-400" />
        </div>
      </section>
    </div>
  );
};

export default LogoList;
