export enum labelEnum {
  HOME = "Home",
  ABOUT = "About",
  CONTRACT = "Contact",
  BLOG = "Blog",
  PROFILE = "Profile",
  SIGNIN = "SignIn"
}

export enum hrefEnum {
  HOME = "/",
  ABOUT = "/about",
  CONTRACT = "/contact",
  BLOG = "/blog",
  PROFILE = "/profile",
  SIGNIN = "/api/auth/signin"
}

export type TNavigateParams = {
  label: labelEnum
  href: hrefEnum
  auth?: boolean,
  signOut?: boolean
}

export const navItems: TNavigateParams[] = [
  { label: labelEnum.HOME, href: hrefEnum.HOME},
  { label: labelEnum.ABOUT, href: hrefEnum.ABOUT},
  { label: labelEnum.CONTRACT, href: hrefEnum.CONTRACT},
  { label: labelEnum.BLOG, href: hrefEnum.BLOG},
  { label: labelEnum.PROFILE, href: hrefEnum.PROFILE, auth: true},
  { label: labelEnum.SIGNIN, href: hrefEnum.SIGNIN, signOut: true}
]

