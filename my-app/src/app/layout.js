import Link from 'next/link'

export default function RootLayout({ children }) {
  return <html lang="en">
    <body>
      {/* <div>
        <h1>Welcome to Next</h1>
      </div> */}
      {/* {props.children} */}
      <div id="rootLayout">
        <nav>
          <Link href="/about">About</Link> |
          <Link href="/dashboard">Dashboard</Link> |
          <Link href="/review">Review</Link> |
          <Link href="/product">Product</Link>

        </nav>
        {children}
      </div>
    </body>
  </html>
}