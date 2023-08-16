"use client";

import { Link } from "@nextui-org/react";
import { InstagramIcon, LinkedInIcon, TwitterIcon } from "./icons";
import { siteConfig } from "@/config/site";

export const FloatingIcons = () => {

    return (
        <div className="relative">
            <div className="fixed flex flex-col left-3 bottom-3">
                <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter" className="mt-3">
                    <TwitterIcon className="text-default-500" />
                </Link>
                <Link isExternal href={siteConfig.links.instagram} aria-label="Instagram" className="mt-3">
                    <InstagramIcon className="text-default-500" />
                </Link>
                <Link isExternal href={siteConfig.links.linkedIn} aria-label="LinkedIn" className="mt-3">
                    <LinkedInIcon className="text-default-500" />
                </Link>
            </div>
        </div>
    );
};
