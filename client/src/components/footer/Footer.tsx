import './footer.css'
const Footer = () => {

  return (
    <div>
        <div className="container">
            <div className="footer">
                <div className="footer-item-disclaimer">
                    <span>This site is not affiliated with Bethel College.</span>
                    <span> All trademarks used are owned by their respective owners</span>
                </div>
                <div>
                <span> &copy; 2024 Caden McArthur MIT License</span>
                </div>
                <span> Report bugs to <a className="mail-link" href="mailto:cadenamcarthur@bethelks.edu">cadenamcarthur@bethelks.edu</a></span>
            </div>
        </div>
    </div>
  )
}

export default Footer