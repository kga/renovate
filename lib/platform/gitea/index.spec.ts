import {
  BranchStatusConfig,
  CommitFilesConfig,
  File,
  GotResponse,
  Platform,
  RepoConfig,
  RepoParams,
} from '..';
import * as ght from './gitea-helper';
      base: { ref: 'some-base-branch' },
        label: 'some-head-branch',
      base: { ref: 'other-base-branch' },
        label: 'other-head-branch',
  const mockRepoLabels: ght.Label[] = [
  const mockOrgLabels: ght.Label[] = [
    {
      id: 3,
      name: 'some-org-label',
      description: 'its a org me',
      color: '#0000aa',
    },
    {
      id: 4,
      name: 'other-org-label',
      description: 'org labelario',
      color: '#ffffaa',
    },
  ];

    it('should return enriched pull request which exists if open', async () => {
      const mockPR = mockPRs[0];
      const res = await gitea.findPr({ branchName: mockPR.head.label });
      expect(res).toHaveProperty('branchName', mockPR.head.label);
        branchName: mockPR.head.label,
      expect(res).toHaveProperty('branchName', mockPR.head.label);
        branchName: mockPR.head.label,
      expect(res).toHaveProperty('branchName', mockPR.head.label);
          branchName: mockPR.head.label,
        branchName: mockPR.head.label,
      expect(res).toHaveProperty('branchName', mockPR.head.label);
        label: 'pr-branch',
        branchName: mockNewPR.head.label,
        head: mockNewPR.head.label,
        branchName: mockNewPR.head.label,
        head: mockNewPR.head.label,
      helper.getRepoLabels.mockResolvedValueOnce(mockRepoLabels);
      helper.getOrgLabels.mockResolvedValueOnce(mockOrgLabels);

      const mockLabels = mockRepoLabels.concat(mockOrgLabels);
        branchName: mockNewPR.head.label,
        labels: mockLabels.map((l) => l.name),
        head: mockNewPR.head.label,
        labels: mockLabels.map((l) => l.id),
        branchName: mockNewPR.head.label,
        branchName: mockNewPR.head.label,
        branchName: mockNewPR.head.label,
          branchName: mockNewPR.head.label,
      const mockIssue = mockIssues.find((i) => i.title === 'open-issue');
      const mockIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const closedIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const closedIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const closedIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const duplicates = mockIssues.filter(
        (i) => i.title === 'duplicate-issue'
      );
      const mockLabel = mockRepoLabels[0];
      helper.getRepoLabels.mockResolvedValueOnce(mockRepoLabels);
      helper.getOrgLabels.mockRejectedValueOnce(new Error());
      helper.getRepoLabels.mockResolvedValueOnce(mockRepoLabels);
      helper.getOrgLabels.mockResolvedValueOnce([]);
      expect(await gitea.getBranchPr(mockPR.head.label)).toHaveProperty(
      await gitea.deleteBranch(mockPR.head.label, true);
      expect(gsmDeleteBranch).toHaveBeenCalledWith(mockPR.head.label);