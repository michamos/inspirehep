export const HOME = '/';

export const LITERATURE = '/literature';

export const AUTHORS = '/authors';

export const JOBS = '/jobs';

export const CONFERENCES = '/conferences';

export const INSTITUTIONS = '/institutions';

export const SEMINARS = '/seminars';

export const USER = '/user';
export const USER_PROFILE = `${USER}/profile`;
export const USER_LOGIN = `${USER}/login`;
export const USER_SIGNUP = `${USER}/signup`;
export const USER_LOCAL_LOGIN = `${USER_LOGIN}/local`;

// TODO: rename `holdingpen` to `admin`
export const HOLDINGPEN = '/holdingpen';
export const HOLDINGPEN_DASHBOARD = `${HOLDINGPEN}/dashboard`;
export const HOLDINGPEN_EXCEPTIONS = `${HOLDINGPEN}/exceptions`;
export const HOLDINGPEN_INSPECT = `${HOLDINGPEN}/inspect`;

export const ERRORS = '/errors';
export const ERROR_401 = `${ERRORS}/401`;
export const ERROR_404 = `${ERRORS}/404`;
export const ERROR_500 = `${ERRORS}/500`;
export const ERROR_NETWORK = `${ERRORS}/network`;

export const SUBMISSIONS = '/submissions';
export const SUBMISSIONS_AUTHOR = `${SUBMISSIONS}/authors`;
export const SUBMISSIONS_LITERATURE = `${SUBMISSIONS}/literature`;
export const SUBMISSIONS_JOB = `${SUBMISSIONS}/jobs`;
export const SUBMISSIONS_CONFERENCE = `${SUBMISSIONS}/conferences`;
export const SUBMISSIONS_SEMINAR = `${SUBMISSIONS}/seminars`;
export const SUBMISSION_SUCCESS = `${SUBMISSIONS}/success`;

export const EDIT_LITERATURE = '/workflows/edit_article';
export const EDIT_AUTHOR = SUBMISSIONS_AUTHOR;
export const EDIT_JOB = SUBMISSIONS_JOB;
export const EDIT_CONFERENCE = '/editor/record/conferences';
export const EDIT_INSTITUTION = '/editor/record/institutions';

export function isBetaRoute(locationPathname) {
  return locationPathname.startsWith(SEMINARS);
}
