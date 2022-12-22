<?php

namespace Kanboard\Plugin\ShowId;
use Kanboard\Core\Plugin\Base;

class Plugin extends Base
{
    public function initialize()
    {
        $this->hook->on('template:layout:css', array('template' => 'plugins/ShowId/showid.css'));
        $this->hook->on('template:layout:js', array('template' => 'plugins/ShowId/showid.js'));
        $this->template->hook->attach('template:task:details:first-column', 'ShowId:task/id_bot');
        $this->template->hook->attach('template:task:details:first-column', 'ShowId:task/id_top');
        $this->template->hook->attach('template:task:show:bottom', 'ShowId:task/id_head');
        $this->template->hook->attach('template:task:show:bottom', 'ShowId:task/id_section');
    }
    public function getPluginName()
    {
        return 'ShowId';
    }
    public function getPluginDescription()
    {
        return t('Show Task ID');
    }
    public function getPluginAuthor()
    {
        return 'Phil Chan';
    }
    public function getPluginVersion()
    {
        return '0.0.1';
    }
    public function getPluginHomepage()
    {
        return 'https://github.com/phil-flex/ShowId';
    }
    public function getCompatibleVersion()
    {
        return '>=1.0.43';
    }
}
