import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Making the World Move</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              The definitive show about closing complex deals. Join the movement to master 
              the art of transformational negotiations.
            </p>
            <div className="flex space-x-4">
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-youtube text-xl"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Content</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/episodes" className="hover:text-white transition-colors">
                  Episodes
                </Link>
              </li>
              <li>
                <Link href="/guests" className="hover:text-white transition-colors">
                  Guests
                </Link>
              </li>
              <li>
                <Link href="/deal-library" className="hover:text-white transition-colors">
                  Deal Library
                </Link>
              </li>
              <li>
                <Link href="/playbooks" className="hover:text-white transition-colors">
                  Playbooks
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/mission" className="hover:text-white transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">© 2024 Making the World Move. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

