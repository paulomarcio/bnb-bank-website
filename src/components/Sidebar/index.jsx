import React from 'react';

import { useApp } from '../../providers/AppProvider';

import icoBalanceSvg from '../../assets/images/ico-balance.svg';
import icoArrowUpSvg from '../../assets/images/ico-arrow-up.svg';
import icoArrowDownSvg from '../../assets/images/ico-arrow-down.svg';
import icoChecksSvg from '../../assets/images/ico-checks.svg';
import icoBellSvg from '../../assets/images/ico-bell.svg';
import icoProfileSvg from '../../assets/images/ico-profile.svg';
import icoSettingsSvg from '../../assets/images/ico-settings.svg';
import icoHelpSvg from '../../assets/images/ico-help.svg';

function Sidebar() {
  const { isMenuActive, setIsMenuActive } = useApp();

  const handleClickOut = e => {
    const sideBar = document.querySelector('.sidebar');
    if (e.target === sideBar) {
      setIsMenuActive(false);
    }
  };

  return (
    <div
      onClick={e => handleClickOut(e)}
      onKeyDown={e => handleClickOut(e)}
      role="button"
      tabIndex={0}
      className={isMenuActive ? 'sidebar active' : 'sidebar'}
    >
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h2>BNB Bank</h2>
        </div>
        <ul>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
              }}
            >
              <i>
                <img src={icoBalanceSvg} alt="Balance" />
              </i>
              Balance
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
              }}
            >
              <i>
                <img src={icoArrowUpSvg} alt="Arrow Up" />
              </i>
              Incomes
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
              }}
            >
              <i>
                <img src={icoArrowDownSvg} alt="Arrow Down" />
              </i>
              Exprenses
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
              }}
            >
              <i>
                <img src={icoChecksSvg} alt="Checks" />
              </i>
              Checks
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
              }}
            >
              <i>
                <img src={icoBellSvg} alt="Notification" />
              </i>
              Notifications
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
              }}
            >
              <i>
                <img src={icoProfileSvg} alt="Profile" />
              </i>
              Profile
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
              }}
            >
              <i>
                <img src={icoSettingsSvg} alt="Settings" />
              </i>
              Settings
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
              }}
            >
              <i>
                <img src={icoHelpSvg} alt="Help" />
              </i>
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
