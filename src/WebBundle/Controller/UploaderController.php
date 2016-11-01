<?php


namespace WebBundle\Controller;


use Symfony\Component\HttpFoundation\Request;
use Topxia\Common\ArrayToolkit;
use Topxia\Service\Common\ServiceKernel;
use Topxia\Service\File\UploadFileService;
use Topxia\WebBundle\Util\UploaderToken;

class UploaderController extends BaseController
{
    public function initAction(Request $request)
    {
        $token = $request->query->get('token');
        $params = $this->parseToken($token);

        if (!$params) {
            return $this->createJsonResponse(array(
                'error' => 'upload token error'
            ));
        }

        $params = array_merge($request->query->all(), $params);

        $result                    = $this->getUploadFileService()->initUpload($params);
        return $this->createJsonpResponse($result, $request->query->get('callback'));
    }

    public function finishedAction(Request $request)
    {
        $token = $request->query->get('token');

        $params = $this->parseToken($token);

        if (!$params) {
            return $this->createJsonResponse(array(
                'error' => 'upload token error')
            );
        }

        $params = array_merge($request->query->all(), $params);

        $params = ArrayToolkit::parts($params, array(
            'id', 'length', 'filename', 'size'
        ));

        $file = $this->getUploadFileService()->finishedUpload($params);
        return $this->createJsonpResponse($file, $request->query->get('callback'));
    }

    private function parseToken($token)
    {
        $parser = new UploaderToken();
        $params = $parser->parse($token);
        return $params;
    }

    /**
     * @return UploadFileService
     */
    private function getUploadFileService()
    {
        return ServiceKernel::instance()->createService('File.UploadFileService');
    }

}