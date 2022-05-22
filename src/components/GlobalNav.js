/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  FingerPrintIcon,
} from '@heroicons/react/outline'

const menu = [
  {
    name: "Achievements",
    href: "#"
  },
  {
    name: "Our Team",
    href: "#"
  },
  {
    name: "Jobs",
    href: "#"
  },
  {
    name: "Contacts",
    href: "#"
  }
]

export default function Example() {
  return (
    <Popover className="relative bg-gray-900 border-b border-gray-400">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <FingerPrintIcon className='w-12 h-12 text-gray-50'/>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:space-x-0 lg:space-x-5 md:flex">
            { menu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-gray-800"
              >
                {item.name}
              </a>
            )) }
          </Popover.Group>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <a
              href="/"
              className="px-4 py-2 text-base font-medium border border-transparent rounded-md shadow-sm whitespace-nowrap text-gray-50 hover:bg-gray-800"
            >
              Sign in
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                { menu.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-base font-medium text-gray-900"
                  >
                    {item.name}
                  </a>
                )) }
              </div>
              <div>
                <a
                  href="/"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-base font-medium text-center text-gray-500">
                  Existing customer?{' '}
                  <a href="/" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
