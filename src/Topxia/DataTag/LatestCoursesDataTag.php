<?php

namespace Topxia\DataTag;

use Topxia\DataTag\DataTag;

class LatestCoursesDataTag extends BaseDataTag implements DataTag  
{
    public function getData($arguments)
    {	
    	$conditions = array();
    	$start = 0;
    	$limit = $arguments;
    	return $this->getCoursService()->searchCourses($conditions, $sort = 'latest', $start, $limit);
    }

    protected function getCoursService()
    {
        return $this->getServiceKernel()->createService('Course.CourseService');
    }
}